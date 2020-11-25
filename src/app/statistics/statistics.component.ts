import { Component, OnInit, OnDestroy } from '@angular/core';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { StatisticsService } from './statistics.service';
import { Ranking } from '../loot-list/models/ranking.model';
import groupBy from 'lodash-es/groupBy';
import { Loot, LootReceipt } from '../loot-list/models/loot.model';
import take from 'lodash-es/take';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject();
  raiderCount = 0;
  lootReceived = 0;
  totalRanked = 0;
  avgAttendance = 0;
  totalReceivedThisPhase = 0;
  totalProgress = null;
  totalProgressTop10 = null;
  mostPopularItems: { ranking: Ranking; sum: number }[] = null;
  mostCommonItems: { item: Loot; count: number }[] = null;
  constructor(
    private lootListFacade: LootListFacadeService,
    private statisticsService: StatisticsService
  ) {}

  ngOnInit(): void {
    this.lootListFacade.raiders$
      .pipe(
        takeUntil(this.destroyed$),
        tap((raiders) => {
          this.raiderCount = raiders.length;

          this.lootReceived = raiders.reduce((prev, cur) => {
            return prev + cur.receivedLoot.length;
          }, 0);
          this.totalRanked = raiders.reduce((prev, cur) => {
            return prev + cur.rankings.length;
          }, 0);

          this.avgAttendance =
            raiders.reduce((prev, cur) => {
              return prev + cur.attendancePoints;
            }, 0) / this.raiderCount;

          const allProgress = raiders.map((r) =>
            this.statisticsService.getRaiderListProgress(r)
          );
          this.totalProgress = allProgress.reduce(
            (prev, cur) => {
              prev.rankings = prev.rankings + cur.rankings;
              prev.rankingsReceived =
                prev.rankingsReceived + cur.rankingsReceived;
              return prev;
            },
            { progress: 0, rankings: 0, rankingsReceived: 0 }
          );
          this.totalProgress.progress =
            (this.totalProgress.rankingsReceived /
              this.totalProgress.rankings) *
            100;

          const top10Progress = raiders.map((r) =>
            this.statisticsService.getRaiderListProgress(r, 10)
          );
          this.totalProgressTop10 = top10Progress.reduce(
            (prev, cur) => {
              prev.rankings = prev.rankings + cur.rankings;
              prev.rankingsReceived =
                prev.rankingsReceived + cur.rankingsReceived;
              return prev;
            },
            { progress: 0, rankings: 0, rankingsReceived: 0 }
          );
          this.totalProgressTop10.progress =
            (this.totalProgressTop10.rankingsReceived /
              this.totalProgressTop10.rankings) *
            100;

          /**
           * Most Popular
           */
          const allRankings = raiders.reduce((prev, cur) => {
            return [...prev, ...cur.rankings];
          }, [] as Ranking[]);

          const groupedRankings = groupBy(allRankings, 'loot.itemId');
          const rankingGroups = Object.keys(groupedRankings).filter(
            (g) => g != 'undefined'
          );
          const sums = rankingGroups
            .map((itemId) => {
              const group = groupedRankings[itemId];
              return {
                itemId,
                sum: group.reduce((p, c) => {
                  return p + c.ranking;
                }, 0),
              };
            })
            .sort((a, b) => b.sum - a.sum);
          const topItems = take(sums, 10);
          this.mostPopularItems = topItems.map((topItem) => ({
            ranking: groupedRankings[topItem.itemId][0],
            sum: topItem.sum,
          }));

          /**
           * Most Common
           */
          const allReceived = raiders.reduce((prev, cur) => {
            return [...prev, ...cur.receivedLoot];
          }, [] as LootReceipt[]);
          const groupedReceipts = groupBy(allReceived, 'itemId');
          const receiptGroups = Object.keys(groupedReceipts).filter(
            (g) => g != 'undefined'
          );
          const counts = receiptGroups
            .map((itemId) => {
              const group = groupedReceipts[itemId];
              return {
                itemId,
                count: group.length,
              };
            })
            .sort((a, b) => b.count - a.count);
          const commonItems = take(counts, 10);
          this.mostCommonItems = commonItems.map((commonItem) => ({
            item: groupedReceipts[commonItem.itemId][0],
            count: commonItem.count,
          }));
        })
      )
      .subscribe();
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
}
