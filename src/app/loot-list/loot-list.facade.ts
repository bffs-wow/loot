import { Injectable } from '@angular/core';
import { LootListService } from './loot-list.service';
import { Sheet } from './models/spreadsheet.model';
import { Ranking } from './models/ranking.model';
import { parsePoints } from './models/attendance.model';
import { Raider, findClass, Class } from './models/raider.model';
import { first, map, shareReplay, tap } from 'rxjs/operators';
import zipObject from 'lodash-es/zipObject';
import drop from 'lodash-es/drop';
import { Observable, combineLatest } from 'rxjs';
import { SheetData } from './models/sheet-data.model';
import { Raid, EligibleLoot, LootGroup, Loot } from './models/loot.model';
import { StateService } from '../state/state.service';
import groupBy from 'lodash-es/groupBy';
import * as itemData from '../data/items.json';

@Injectable({ providedIn: 'root' })
export class LootListFacadeService {
  itemData = (itemData as any).default;
  sheet$ = this.lootListService.get<Sheet>('').pipe(first());
  /**
   * Convert tanking sheet into usable `Ranking` objects
   */
  rankings$ = this.lootListService.getData('Rankings', 'A1:D3000').pipe(
    first(),
    map((data) => {
      const values = drop(data.values, 2);
      return (
        values
          // Remove 'formula' col
          .map((v) => drop(v))
          // Map rows into objects
          .map((v) => zipObject(['raider', 'loot', 'ranking'], v))
          .map((o) => {
            return {
              ...o,
              ranking: parseInt(o.ranking),
            } as Ranking;
          })
          // Remove empty items (where raider didn't list full 30 items)
          .filter((o) => o.loot !== '')
      );
    }),
    shareReplay()
  );

  attendance$: Observable<Partial<Raider>[]> = this.lootListService
    .getData('Attendance', 'A1:AL80')
    .pipe(
      first(),
      map((data) => {
        const values = drop(data.values);
        const headings = data.values[0] as [
          'Raider',
          'Attendance Points',
          ...Array<string>
        ];

        return values.map((v) => {
          const obj = zipObject(headings, v);
          // Raid dates are all the rest of the values without the first two columns
          const raidDates = drop(headings, 2);
          const raider: Partial<Raider> = {
            name: obj.Raider,
            attendancePoints: parseFloat(obj['Attendance Points']),
            attendance: raidDates.map((d) => ({
              date: new Date(d),
              points: parsePoints(obj[d]),
            })),
          };
          return raider;
        });
      }),
      shareReplay()
    );

  /**
   * Shared rxjs map operator function to process loot from each raid sheet.
   */
  private lootMapper = (data: SheetData) => {
    const headings = data.values[0] as ['Raider', ...Array<string>];
    // Items in this raid are the header values without the first 'raider' column
    const items = drop(headings).map((itemName) => {
      let sheetName = itemName;
      if (/[1234]$/.test(itemName)) {
        itemName = itemName.substring(0, itemName.length - 2);
      }
      const item = {
        ...this.itemData.find((l) => l.name === itemName),
      } as Loot;
      if (!item) {
        console.error(`${itemName} not found!`);
        return null;
      }
      item.sheetName = sheetName;
      return item;
    });
    // Values are all rows after the header row
    const values = drop(data.values);
    return values.map((v) => {
      const obj = zipObject(headings, v);

      const eligibleItems = items.filter((i) => obj[i.sheetName] !== 'N/A');
      // If the cell value is not a date, it represents their current points
      const pendingLoot = eligibleItems.filter(
        (i) => /.+\/.+\/.+/.test(obj[i.sheetName]) === false
      );
      // If the cell value is a date, the raider received that item
      const receivedLoot = eligibleItems.filter((i) =>
        /.+\/.+\/.+/.test(obj[i.sheetName])
      );

      const raider: Partial<Raider> = {
        name: obj.Raider,
        pendingLoot: pendingLoot.map((l) => ({
          ...l,
          points: parseFloat(obj[l.sheetName]),
        })),
        receivedLoot: receivedLoot.map((l) => ({
          ...l,
          date: new Date(obj[l.sheetName]),
        })),
      };

      return raider;
    });
  };

  onyLoot$: Observable<Partial<Raider>[]> = this.lootListService
    .getData('Ony', 'A1:R60')
    .pipe(
      first(),
      map((data) => this.lootMapper(data)),
      shareReplay()
    );
  mcLoot$ = this.lootListService.getData('MC', 'A1:EE60').pipe(
    first(),
    map((data) => this.lootMapper(data)),
    shareReplay()
  );
  bwlLoot$ = this.lootListService.getData('BWL', 'A1:DV60').pipe(
    first(),
    map((data) => this.lootMapper(data)),
    shareReplay()
  );
  aq40Loot$ = this.lootListService.getData('AQ40', 'A1:DX60').pipe(
    first(),
    map((data) => this.lootMapper(data)),
    shareReplay()
  );

  /**
   * Join data across sheets to populate full `Raider` objects
   */
  raiders$: Observable<Raider[]> = combineLatest([
    this.attendance$,
    this.rankings$,
    this.bwlLoot$,
    this.mcLoot$,
    this.onyLoot$,
    this.aq40Loot$,
  ]).pipe(
    map(([attendance, rankings, bwl, mc, ony, aq]) => {
      return attendance.map((rAtt) => {
        const rRankings = rankings.filter((r) => r.raider === rAtt.name);
        const rBwl = bwl.find((r) => r.name === rAtt.name);
        const rMc = mc.find((r) => r.name === rAtt.name);
        const rOny = ony.find((r) => r.name === rAtt.name);
        const rAq = aq.find((r) => r.name === rAtt.name);
        const raider: Raider = {
          name: rAtt.name,
          class: Class.Unknown,
          attendance: rAtt.attendance,
          attendancePoints: rAtt.attendancePoints,
          rankings: rRankings,
          pendingLoot: [
            ...rBwl.pendingLoot,
            ...rMc.pendingLoot,
            ...rOny.pendingLoot,
            ...rAq.pendingLoot,
          ],
          receivedLoot: [
            ...rBwl.receivedLoot,
            ...rMc.receivedLoot,
            ...rOny.receivedLoot,
            ...rAq.receivedLoot,
          ],
        };

        raider.class = findClass(raider);
        return raider;
      });
    }),
    tap((raiders) => {
      this.state.setState({ raiders });
    })
  );

  allEligibleLoot$: Observable<EligibleLoot[]> = this.raiders$.pipe(
    map((raiders) =>
      raiders.reduce((loot, raider) => {
        const raiderLoot = raider.pendingLoot.map((r) => ({
          ...r,
          raiderName: raider.name,
        }));
        return [...loot, ...raiderLoot];
      }, [])
    )
  );

  constructor(
    private state: StateService,
    private lootListService: LootListService
  ) {}

  /**
   * Takes all eligible loot across all raiders who want an item.
   * Groups by point values and sorts highest to lowest.
   */
  groupAndSort(loot: EligibleLoot[]): LootGroup[] {
    // Some loot can be looted multiple times (i.e. `Deathbringer 1`, `Deathbringer 2`)
    // Group all of the loot by the 'sheetName' which indlues the multiples number
    const multiples = groupBy(loot, 'sheetName');
    const multipleNames = Object.keys(multiples);
    // Take each group of loot (this works fine for singles too)
    const rankedGroups = multipleNames.reduce((lootGroups, multiple) => {
      // Group this group by points
      const grp = multiples[multiple];
      const grouped = groupBy(grp, 'points');
      const points = Object.keys(grouped);
      // take each grouping of points, and make a `LootGroup` object from it
      const rankedGroup: LootGroup[] = points.map((point) => ({
        points: parseFloat(point),
        rankings: grouped[point],
      }));
      return [...lootGroups, ...rankedGroup];
    }, []);
    // Finally, sort all of the groups with the highest oints on top
    return rankedGroups.sort((a, b) => b.points - a.points);
  }
}
