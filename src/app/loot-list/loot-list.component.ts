import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Raider } from './models/raider.model';
import { LootReceipt, EligibleLoot } from './models/loot.model';
import {
  faCheck,
  faAward,
  faClock,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Ranking } from './models/ranking.model';
import { LootListFacadeService } from './loot-list.facade';
import { map, tap, first, startWith } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-loot-list',
  templateUrl: './loot-list.component.html',
  styleUrls: ['./loot-list.component.scss'],
})
export class LootListComponent implements OnInit, OnChanges {
  @Input() raider: Raider;
  @Input() noRouteLink = false;
  competition: { [itemName: string]: EligibleLoot[] } = {};
  faCheck = faCheck;
  constructor(private lootListFacade: LootListFacadeService) {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    if (changes.raider) {
      combineLatest(
        this.raider.rankings
          .filter((r) => !!r.loot)
          .map((ranking) =>
            this.getCompetition(ranking).pipe(
              map((group) => ({ group, ranking }))
            )
          )
      )
        .pipe(
          first(),
          tap((groups) => {
            for (const group of groups) {
              this.competition[group.ranking.itemName] = group.group;
            }
          })
        )
        .subscribe();
    }
  }

  receivedLoot(ranking: Ranking): LootReceipt {
    if (this.raider && ranking) {
      return this.raider.receivedLoot.find(
        (l) => l.sheetName === ranking.itemName
      );
    }
    return null;
  }

  getCompetition(ranking: Ranking) {
    return this.lootListFacade.getRankedLootGroups(ranking.loot.name).pipe(
      map((groups) =>
        groups.filter(
          (grp) => grp.points >= ranking.ranking + this.raider.attendancePoints
        )
      ),
      map((groups) =>
        groups
          .map((grp) => {
            grp.rankings = grp.rankings.filter(
              (r) => r.raiderName !== this.raider.name
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
