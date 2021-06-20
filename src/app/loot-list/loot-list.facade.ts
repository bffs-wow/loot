import { Injectable } from '@angular/core';
import { LootListService } from './loot-list.service';

import { Ranking } from './models/ranking.model';
import { parsePoints } from './models/attendance.model';
import { Raider, Class, parseClass } from './models/raider.model';
import {
  first,
  map,
  tap,
  switchMap,
  shareReplay,
  withLatestFrom,
} from 'rxjs/operators';
import zipObject from 'lodash-es/zipObject';
import drop from 'lodash-es/drop';
import { Observable, ReplaySubject, timer, NEVER, zip } from 'rxjs';
import { SheetData } from './models/sheet-data.model';
import { EligibleLoot, LootGroup, Loot } from './models/loot.model';
import { StateService } from '../state/state.service';
import { ItemService } from '../wow-data/item.service';
import groupBy from 'lodash-es/groupBy';
import { CacheService } from '../cache/cache.service';
import Swal from 'sweetalert2';
import isUndefined from 'lodash-es/isUndefined';

@Injectable({ providedIn: 'root' })
export class LootListFacadeService {
  private loadData = new ReplaySubject(1);
  private loadData$ = this.loadData.asObservable();
  /**
   * Convert ranking sheet into usable `Ranking` objects
   */
  rankings$ = this.loadData$.pipe(
    switchMap(() => this.lootListService.getData('Rankings', 'A1:D3000')),
    map((data) => {
      const values = drop(data.values, 2);
      return (
        values
          // Remove 'formula' col
          .map((v) => drop(v))
          // Map rows into objects
          .map((v) => zipObject(['raider', 'itemName', 'ranking'], v))
          .map((o) => {
            return {
              ...o,
              ranking: parseInt(o.ranking),
            } as Ranking;
          })
          // Remove empty items (where raider didn't list full 30 items)
          .filter((o) => o.itemName !== '')
      );
    }),
    // Share replay - will still clear allow for `loadData` to trigger new calls to the sheet
    shareReplay(1)
  );

  attendance$: Observable<Partial<Raider>[]> = this.loadData$.pipe(
    switchMap(() => this.lootListService.getData('Attendance', 'A1:BL60')),
    map((data) => {
      const values = drop(data.values);
      const headings = data.values[0] as [
        'Raider',
        'Attendance Points',
        'Class',
        ...Array<string>
      ];

      return (
        values
          // Filter out empty rows
          .filter((v) => !!v[0])
          .map((v) => {
            const obj = zipObject(headings, v);
            // Raid dates are all the rest of the values without the first 3 columns
            const raidDates = drop(headings, 3);
            const raider: Partial<Raider> = {
              name: obj.Raider,
              class: parseClass(obj['Class']),
              attendancePoints: parseFloat(obj['Attendance Points']),
              attendance: raidDates
                .filter((d) => !isUndefined(obj[d]))
                .map((d) => ({
                  date: new Date(d),
                  points: parsePoints(obj[d]),
                }))
                .sort((a, b) => {
                  return +b.date - +a.date;
                }),
            };
            if (raider.class == Class.Unknown) {
              console.warn(`Unknown class for raider ${raider.name}`, raider);
            }
            return raider;
          })
          // Filter out any without a class
          .filter((r) => r.class !== Class.Unknown)
      );
    }),
    // Share replay - will still clear allow for `loadData` to trigger new calls to the sheet
    shareReplay(1)
  );

  /**
   * Shared rxjs map operator function to process loot from each raid sheet.
   */
  private lootMapper = (data: SheetData) => {
    const headings = data.values[0] as ['Raider', ...Array<string>];
    // Items in this raid are the header values without the first 'raider' column
    const items = drop(headings).map((itemName) => {
      let sheetName = itemName;
      // If the name ends with a number, it is an item that allows multiple listings
      if (/[1234]$/.test(itemName)) {
        // get the actual item name
        itemName = itemName.substring(0, itemName.length - 2);
      }
      let item = this.itemService.getByName(itemName) as Loot;
      if (!item) {
        console.error(`${itemName} not found!`);
        return null;
      }
      // Clone the item to avoid accidental mutation
      item = {
        ...item,
        sheetName,
      };

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
          points: parseFloat(obj[l.sheetName]) || 0,
        })),
        receivedLoot: receivedLoot.map((l) => ({
          ...l,
          date: new Date(obj[l.sheetName]),
        })),
      };

      return raider;
    });
  };

  karaLoot$ = this.loadData$.pipe(
    switchMap(() => this.lootListService.getData('Karazhan', 'A1:FE60')),
    map((data) => this.lootMapper(data)),
    // Share replay - will still clear allow for `loadData` to trigger new calls to the sheet
    shareReplay(1)
  );

  gruulLoot$ = this.loadData$.pipe(
    switchMap(() => this.lootListService.getData('Gruul', 'A1:AL60')),
    map((data) => this.lootMapper(data)),
    // Share replay - will still clear allow for `loadData` to trigger new calls to the sheet
    shareReplay(1)
  );

  magLoot$ = this.loadData$.pipe(
    switchMap(() => this.lootListService.getData('Magtheridon', 'A1:W60')),
    map((data) => this.lootMapper(data)),
    // Share replay - will still clear allow for `loadData` to trigger new calls to the sheet
    shareReplay(1)
  );

  /**
   * After we get data from every sheet, join it to populate full `Raider` objects.
   */
  raiders$: Observable<Raider[]> = zip(
    this.attendance$,
    this.rankings$,
    this.karaLoot$,
    this.gruulLoot$,
    this.magLoot$
  ).pipe(
    map(([attendance, rankings, kara, gruul, mag]) => {
      return attendance.map((rAtt) => {
        const rRankings = rankings.filter((r) => r.raider === rAtt.name);
        if (!rRankings) {
          throw new Error(
            `SHEET ISSUE: Could not find rankings for: ${rAtt.name}`
          );
        }
        let rKara = kara.find((r) => r.name === rAtt.name);
        if (!rKara) {
          rKara = { pendingLoot: [], receivedLoot: [] };
        }
        let rGruul = gruul.find((r) => r.name === rAtt.name);
        if (!rGruul) {
          rGruul = { pendingLoot: [], receivedLoot: [] };
        }
        let rMag = mag.find((r) => r.name === rAtt.name);
        if (!rMag) {
          rMag = { pendingLoot: [], receivedLoot: [] };
        }
        let raider: Raider = {
          name: rAtt.name,
          class: rAtt.class,
          attendance: rAtt.attendance,
          attendancePoints: rAtt.attendancePoints,
          rankings: [],
          pendingLoot: [
            ...rKara.pendingLoot,
            ...rGruul.pendingLoot,
            ...rMag.pendingLoot,
          ],
          receivedLoot: [
            ...rKara.receivedLoot,
            ...rGruul.receivedLoot,
            ...rMag.receivedLoot,
          ].sort((a, b) => {
            return +b.date - +a.date;
          }),
        };
        const raiderLoot = [...raider.pendingLoot, ...raider.receivedLoot];
        // Relate ranking with their loot item objects
        raider.rankings = rRankings.map((r) => {
          r.loot = raiderLoot.find(
            (l) => l.sheetName.toLowerCase() === r.itemName.toLowerCase()
          );
          if (!r.loot) {
            console.warn(
              `SHEET ISSUE: Couldn't find item for ranking "${r.itemName}" - ${raider.name}`
            );
          }
          return r;
        });

        return raider;
      });
    }),
    withLatestFrom(
      this.lootListService.lastCallCached$,
      this.state.selectedRaider$
    ),
    tap(([raiders, wasCached, selectedRadier]) => {
      this.state.setState({ raiders });
      // If there is a selected raider, ensure they are updated with the latest data from the sheet
      if (selectedRadier) {
        const updatedRaider = raiders.find(
          (r) => r.name === selectedRadier.name
        );
        this.state.setState({ selectedRaider: updatedRaider });
      }
      // Only notify upon fresh data retrieval
      if (!wasCached) {
        Swal.fire({
          position: 'top-end',
          toast: true,
          icon: 'success',
          title: 'Data Loaded from Google Sheet!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }),
    // Remove cache flag from result
    map(([raiders]) => raiders),
    // Store the result - only recalculate when new data arrives from the sheet
    shareReplay(1)
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

  allReceivedLoot$: Observable<EligibleLoot[]> = this.raiders$.pipe(
    map((raiders) =>
      raiders.reduce((loot, raider) => {
        const raiderLoot = raider.receivedLoot.map((r) => ({
          ...r,
          raiderName: raider.name,
        }));
        return [...loot, ...raiderLoot];
      }, [])
    )
  );

  constructor(
    private state: StateService,
    private itemService: ItemService,
    private lootListService: LootListService,
    private cache: CacheService
  ) {
    // ensure initial load of data
    this.loadData.next();
    this.raiders$.pipe(first()).subscribe();

    // Handle Auto Reload
    this.state.autoUpdate$
      .pipe(
        switchMap((autoUpdate) => (autoUpdate ? timer(0, 60000) : NEVER)),
        tap(() => this.reloadData())
      )
      .subscribe();

    // If we are loading the app between 6:00 and 12:00 PM +/- 1 hr ET (Raid Time)
    const now = new Date();
    if (now.getUTCHours() > 23 || now.getUTCHours() < 5) {
      // Force a fresh data load
      this.reloadData();
    }
  }

  getRankedLootGroups(itemName: string): Observable<LootGroup[]> {
    return this.allEligibleLoot$.pipe(
      map((allLoot) => {
        if (!itemName) {
          return [];
        }
        return allLoot.filter(
          (l) => l.name.toLowerCase() === itemName.toLowerCase()
        );
      }),
      map((rankings) => {
        // build iterable / sortable groups by points
        return this.groupAndSort(rankings);
      })
    );
  }

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
      const rankedGroup: LootGroup[] = points
        .map((point) => ({
          points: parseFloat(point),
          rankings: grouped[point],
        }))
        .filter((g) => !isNaN(g.points));
      return [...lootGroups, ...rankedGroup];
    }, []);
    // Finally, sort all of the groups with the highest oints on top
    return rankedGroups.sort((a, b) => b.points - a.points);
  }

  reloadData() {
    Swal.fire({
      position: 'top-end',
      toast: true,
      icon: 'info',
      title: 'Reloading...',
      showConfirmButton: false,
      timer: 1500,
    });
    return this.cache.clear().then(() => {
      this.loadData.next();
    });
  }
}
