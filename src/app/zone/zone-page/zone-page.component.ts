import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';
import { LootListFacadeService } from 'src/app/loot-list/loot-list.facade';
import { Item, Source } from 'src/app/wow-data/item.interface';
import { ItemService } from 'src/app/wow-data/item.service';
import { ZoneService } from 'src/app/wow-data/zone.service';

@Component({
  selector: 'app-zone-page',
  templateUrl: './zone-page.component.html',
  styleUrls: ['./zone-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZonePageComponent implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  zone$ = this.route.params.pipe(
    map((p) => p['slug']),
    map((slug) => this.zoneService.getZone(slug))
  );
  // Filter by boss/item source
  allSource: Partial<Source> = { name: 'All', category: 'All' };
  zoneItemSources$: Observable<Partial<Source>[]> = this.zone$.pipe(
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
      if (params['boss']) {
        let sourceFromParam = sources.find((s) => s.name === params['boss']);
        if (!sourceFromParam && params['boss'] === 'Zone Drop') {
          sourceFromParam = sources.find((s) => s.category === 'Zone Drop');
        }
        // If no query param is present, reset to 'All'
        if (!sourceFromParam) {
          sourceFromParam = this.allSource;
        }
        this._chosenSource$.next(sourceFromParam);
      }
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

  sourceChosen(source: Partial<Source>) {
    this._chosenSource$.next(source);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { boss: source.name || source.category },
      queryParamsHandling: 'merge', // remove to replace all query params by provided
    });
  }

  getSourceLoot(source: Source) {
    return this.zone$.pipe(
      map((zone) => this.itemService.getBySource(zone, source))
    );
  }

  getNextRecipient(item: Item) {
    return this.lootListFacade.getRankedLootGroups(item.name).pipe(
      first(),
      map((groups) => (groups.length ? groups[0] : null)),
      filter(grp => grp !== null),
      map(grp => grp.rankings.length ? grp.rankings : null)
    );
  }
}
