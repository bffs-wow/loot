import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, combineLatest, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { StateService } from '../state/state.service';
import {
  faBullhorn,
  faExternalLinkAlt,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { LootAnnounceService } from '../loot-announce/loot-announce.service';
import { ItemService } from '../tmb/item.service';
import { CsvItem } from '../tmb/models/item.interface';
import { LootGroup } from '../loot-list/models/loot-group.model';
import { LootReceipt } from '../loot-list/models/loot-receipt.model';
import { environment } from 'src/environments/environment';
import { TmbService } from '../tmb/tmb.service';
import { Class } from '../loot-list/models/class.model';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  item$: Observable<CsvItem>;
  itemToGroupRedirects = {
    66998: 't11-heroic-tokens'
  }

  tradeInItem$: Observable<CsvItem>;

  lootGroups$: Observable<LootGroup[]>;

  recentRecipients$: Observable<LootReceipt[]>;

  allowedClasses$: Observable<Class[]>;

  faExternalLinkAlt = faExternalLinkAlt;
  faBullhorn = faBullhorn;
  faShieldAlt = faShieldAlt;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private state: StateService,
    private itemService: ItemService,
    private lootListFacade: LootListFacadeService,
    public lootAnnounceService: LootAnnounceService,
    private tmbService: TmbService
  ) { }

  ngOnInit(): void {
    this.item$ = combineLatest([
      this.route.params,
      this.itemService.allItems$,
    ]).pipe(
      map(([params, allitems]) =>
        allitems.find((l) => l.id === parseInt(params.id))
      ),
      tap(item => {
        if (item && this.itemToGroupRedirects[item.id]) {
          setTimeout(() => {
            this.router.navigate(['item-group', this.itemToGroupRedirects[item.id]])

          }, 1500)
        }
      })
    );

    this.lootGroups$ = this.item$.pipe(
      switchMap((item) => this.lootListFacade.getRankedLootGroups(item.id))
    );

    this.tradeInItem$ = this.lootGroups$.pipe(
      switchMap((grps) => {
        if (!grps.length) {
          return of(null);
        }
        if (!grps[0].rankings.length) {
          return of(null);
        }
        const ranking = grps[0].rankings[0];
        if (ranking.item.parent_item_id) {
          return this.itemService.getById(ranking.item.parent_item_id);
        }
        return of(null);
      })
    );

    this.recentRecipients$ = combineLatest([
      this.item$,
      this.state.raiders$,
    ]).pipe(
      map(([item, raiders]) =>
        raiders.reduce((loot: LootReceipt[], raider) => {
          const raiderLoot = raider.received
            .filter((i) => i.item_id === item.id)
            .map((r) => ({
              item: r,
              raider,
            }));
          return [...loot, ...raiderLoot];
        }, [])
      ),
      map((loot: LootReceipt[]) =>
        loot.sort((a, b) => {
          return +b.item.pivot.received_at - +a.item.pivot.received_at;
        })
      )
    );

    this.allowedClasses$ = this.item$.pipe(
      map(i => this.tmbService.getItemRestrictions(i.id)),
      map(r => r.allowedClasses)
    )
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }

  makeTmbUrl(item: CsvItem) {
    return `${environment.tmbBaseUrl}i/${item.id}`;
  }

  async copyToClipBoard(grp: LootGroup[]) {
    await this.lootAnnounceService.copyLootAnnouncement(grp);
  }
}
