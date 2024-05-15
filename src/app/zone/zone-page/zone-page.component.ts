import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  faExclamationTriangle,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import uniqBy from 'lodash-es/uniqBy';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';
import { LootListFacadeService } from 'src/app/loot-list/loot-list.facade';
import { LootRanking } from 'src/app/loot-list/models/ranking.model';
import { ItemService } from 'src/app/tmb/item.service';
import { CsvItem } from 'src/app/tmb/models/item.interface';
import { ZoneService } from '../zone.service';

@Component({
  selector: 'app-zone-page',
  templateUrl: './zone-page.component.html',
  styleUrls: ['./zone-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZonePageComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  faExclamationTriangle = faExclamationTriangle;
  zone$ = this.route.params.pipe(
    map((p) => p['slug']),
    map((slug) => this.zoneService.getZone(slug))
  );
  // Filter by boss/item source
  allSource = 'All';
  zoneItemSources$: Observable<string[]> = this.zone$.pipe(
    filter((zone) => !!zone),
    map((zone) => {
      if (zone.itemSources.length > 1) {
        return [this.allSource, ...zone.itemSources];
      }
      return [...zone.itemSources];
    })
  );
  private _chosenSource$ = new BehaviorSubject(this.allSource);
  chosenSource$ = combineLatest([
    this.zoneItemSources$,
    this.route.queryParams,
  ]).pipe(
    tap(([sources, params]) => {
      // If no query param is present, reset to 'All'
      let sourceFromParam = this.allSource;
      if (params['boss']) {
        sourceFromParam = sources.find((s) => s === params['boss']);
      }
      this._chosenSource$.next(sourceFromParam || sources[0]);
    }),
    switchMap(() => this._chosenSource$.asObservable())
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private zoneService: ZoneService,
    private lootListFacade: LootListFacadeService
  ) {}

  ngOnInit(): void {}

  sourceChosen(source: Partial<string>) {
    this._chosenSource$.next(source);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { boss: source },
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  getSourceLoot(source: string) {
    return this.zone$.pipe(
      switchMap((zone) => this.itemService.getBySource(zone, source)),
      // de-duplicate for this view
      map((items) => uniqBy(items, 'id'))
    );
  }

  getNextRecipient(item: CsvItem) {
    return this.lootListFacade.getRankedLootGroups(item.id).pipe(
      first(),
      map((groups) => (groups.length ? groups[0] : null)),
      filter((grp) => grp !== null),
      map((grp) => (grp.rankings.length ? grp.rankings : null))
    );
  }

  /**
   * Returns true if none of the loot in the array is listed directly on someone's loot list
   * @param items
   * @returns
   */
  noneListed(items: LootRanking[]) {
    return items && items.every((i) => i.item.pivot.note === 'Unlisted');
  }
}
