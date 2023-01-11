import { Injectable } from '@angular/core';
import { Raider } from '../tmb/models/tmb.interface';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  getRaiderListProgress(raider: Raider, limit: number = null) {
    const numRanked = limit ? limit : raider.wishlist.length;
    const rankingsReceived = raider.wishlist
      .slice(0, numRanked)
      .filter((w) => w.pivot.is_received !== 0);

    return {
      progress: (rankingsReceived.length / numRanked) * 100,
      rankingsReceived: rankingsReceived.length,
      rankings: numRanked,
    };
  }
}
