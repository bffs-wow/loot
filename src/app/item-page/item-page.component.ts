import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, combineLatest, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
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

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  item$: Observable<CsvItem>;

  tradeInItem$: Observable<CsvItem>;

  lootGroups$: Observable<LootGroup[]>;

  recentRecipients$: Observable<LootReceipt[]>;

  faExternalLinkAlt = faExternalLinkAlt;
  faBullhorn = faBullhorn;
  faShieldAlt = faShieldAlt;

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private itemService: ItemService,
    private lootListFacade: LootListFacadeService,
    public lootAnnounceService: LootAnnounceService
  ) {}

  ngOnInit(): void {
    this.item$ = combineLatest([
      this.route.params,
      this.itemService.allItems$,
    ]).pipe(
      map(([params, allitems]) =>
        allitems.find((l) => l.item_id === parseInt(params.id))
      )
    );

    this.lootGroups$ = this.item$.pipe(
      switchMap((item) =>
        this.lootListFacade.getRankedLootGroups(item.item_name)
      )
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
            .filter((i) => i.item_id === item.item_id)
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
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }

  makeTmbUrl(item: CsvItem) {
    return `${environment.tmbBaseUrl}i/${item.item_id}`;
  }

  async copyToClipBoard(grp: LootGroup[]) {
    await this.lootAnnounceService.copyLootAnnouncement(grp);
  }
}
