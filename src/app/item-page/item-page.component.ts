import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Loot, LootGroup, LootReceipt } from '../loot-list/models/loot.model';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { StateService } from '../state/state.service';
import {
  faBullhorn,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { LootAnnounceService } from '../loot-announce/loot-announce.service';
import { ItemService } from '../wow-data/item.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss'],
})
export class ItemPageComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  item$: Observable<Loot>;

  tradeInItem$: Observable<Loot>;

  lootGroups$: Observable<LootGroup[]>;

  recentRecipients$: Observable<LootReceipt[]>;

  faExternalLinkAlt = faExternalLinkAlt;
  faBullhorn = faBullhorn;

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
        allitems.find((l) => l.itemId === parseInt(params.id))
      )
    );

    this.lootGroups$ = this.item$.pipe(
      switchMap((item) => this.lootListFacade.getRankedLootGroups(item.name))
    );

    this.tradeInItem$ = this.lootGroups$.pipe(
      map((grps) => {
        if (!grps.length) {
          return null;
        }
        if (!grps[0].rankings.length) {
          return null;
        }
        const item = grps[0].rankings[0];
        return item.tradeInItem;
      })
    );

    this.recentRecipients$ = combineLatest([
      this.item$,
      this.state.raiders$,
    ]).pipe(
      map(([item, raiders]) =>
        raiders.reduce((loot, raider) => {
          const raiderLoot = raider.receivedLoot
            .filter((i) => i.itemId === item.itemId)
            .map((r) => ({
              ...r,
              raiderName: raider.name,
            }));
          return [...loot, ...raiderLoot];
        }, [])
      ),
      map((loot: LootReceipt[]) =>
        loot.sort((a, b) => {
          return +b.date - +a.date;
        })
      )
    );
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }

  async copyToClipBoard(grp: LootGroup[]) {
    await this.lootAnnounceService.copyLootAnnouncement(grp);
  }
}
