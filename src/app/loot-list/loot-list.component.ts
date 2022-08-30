import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  faCheck,
  faAward,
  faClock,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { LootListFacadeService } from './loot-list.facade';
import { map, tap, first, startWith } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import {
  Raider,
  ReceivedItem,
  WishlistItem,
} from '../tmb/models/tmb.interface';
import { LootRanking } from './models/ranking.model';

@Component({
  selector: 'app-loot-list',
  templateUrl: './loot-list.component.html',
  styleUrls: ['./loot-list.component.scss'],
})
export class LootListComponent implements OnInit, OnChanges {
  @Input() raider: Raider;
  @Input() noRouteLink = false;
  competition: { [itemName: string]: LootRanking[] } = {};
  faCheck = faCheck;
  constructor(private lootListFacade: LootListFacadeService) {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    if (changes.raider) {
      combineLatest(
        this.raider.wishlist.map((ranking) =>
          this.getCompetition({
            item: ranking,
            raider: this.raider,
          }).pipe(map((group) => ({ group, ranking })))
        )
      )
        .pipe(
          first(),
          tap((groups) => {
            for (const group of groups) {
              this.competition[
                `${group.ranking.name}-${group.ranking.pivot.order}`
              ] = group.group;
            }
          })
        )
        .subscribe();
    }
  }

  receivedLoot(ranking: WishlistItem): boolean {
    if (this.raider && ranking) {
      return !!ranking.pivot.is_received;
    }
    return null;
  }

  getCompetition(ranking: LootRanking) {
    return this.lootListFacade.getRankedLootGroups(ranking.item.name).pipe(
      map((groups) =>
        groups.filter((grp) => grp.points >= ranking.item.raider_points)
      ),
      map((groups) =>
        groups
          .map((grp) => {
            grp.rankings = grp.rankings.filter(
              (r) => r.raider.name !== this.raider.name
            );
            return grp;
          })
          .filter((grp) => grp.rankings.length > 0)
          .map((grp) => grp.rankings)
          .reduce((acc, cur) => {
            return [...cur, ...acc];
          }, [])
      )
    );
  }

  getCachedCompetition(item: WishlistItem) {
    return this.competition[`${item.name}-${item.pivot.order}`];
  }

  getCompetitionIcon(place: number) {
    if (place === 0) {
      return faAward;
    } else if (place <= 3) {
      return faClock;
    } else {
      return faCalendarAlt;
    }
  }
}
