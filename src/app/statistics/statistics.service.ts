import { Injectable } from '@angular/core';
import { Raider } from '../tmb/models/tmb.interface';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  getRaiderListProgress(raider: Raider, limit: number = null) {
    const numRanked = limit ? limit : raider.wishlist.length;
    const rankingsReceived = raider.received
      .slice(0, numRanked)
      .filter((l) => raider.wishlist.some((r) => r.item_id === l.item_id));

    return {
      progress: (rankingsReceived.length / numRanked) * 100,
      rankingsReceived: rankingsReceived.length,
      rankings: numRanked,
    };
  }
}
