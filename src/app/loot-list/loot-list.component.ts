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
import { environment } from 'src/environments/environment';
import range from 'lodash-es/range';
import chunk from 'lodash-es/chunk';

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
    return this.lootListFacade.getRankedLootGroups(ranking.item.item_id).pipe(
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
          // Ensure sort: highest points on top
          .sort((a, b) => b.item.raider_points - a.item.raider_points)
      )
    );
  }

  getCachedCompetition(item: WishlistItem) {
    return this.competition[`${item.name}-${item.pivot.order}`];
  }

  tiedForFirst(competition: LootRanking[], ranking: WishlistItem) {
    if (competition.length) {
      // Is the raider up next?
      const firstPlacePoints = competition[0].item.raider_points;
      if (ranking.raider_points === firstPlacePoints) {
        const ties = competition.filter(
          (c) => c.item.raider_points === ranking.raider_points
        );

        return { ties: ties.length };
      }
    }
    // Not tied: no competition
    return { ties: 0 };
  }

  getCompetitionIcon(place: number, firstPlaceTies: number) {
    if (place === 0 || firstPlaceTies > 0) {
      return faAward;
    } else if (place <= 3) {
      return faClock;
    } else {
      return faCalendarAlt;
    }
  }

  getWeaponLootGroupClass(place: number) {
    const chunks = chunk(
      range(1, environment.wishlistLength + 1).reverse(),
      environment.itemsPerSlotRule
    );
    const idx = chunks.findIndex((ch) => ch.includes(place));
    return idx % 2 ? 'is-even-group' : 'is-odd-group';
  }
}
