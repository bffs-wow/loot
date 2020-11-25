import { Injectable } from '@angular/core';
import { Raider } from '../loot-list/models/raider.model';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  getRaiderListProgress(raider: Raider, limit: number = null) {
    const numRanked = limit ? limit : raider.rankings.length;
    const rankingsReceived = raider.receivedLoot.slice(0, numRanked).filter((l) =>
      raider.rankings.some(
        (r) => r.loot?.sheetName.toLowerCase() === l.sheetName.toLowerCase()
      )
    );

    return {
      progress: (rankingsReceived.length / numRanked) * 100,
      rankingsReceived: rankingsReceived.length,
      rankings: numRanked,
    };
  }
}
