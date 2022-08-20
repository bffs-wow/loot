import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CacheService } from '../cache/cache.service';
import { sha256 } from '../util';
import { Raider } from './models/tmb.interface';

type TmbShaCache = {
  date: string;
  sha: string;
};

const processRaiders = (tmbData: Raider[]) =>
  tmbData.map((r) => {
    /**
     * attendance_percentage is provided by TMB. This is based on the raid credit the raider has been given over the configured period from TMB settings.
     * Each raid is worth a maximum of 1 point, which will be modified by the attendance percentage. For example, if I've attended 10 raids with 0.75%
     * attendance_percentage, my attendance_points would be 7.5.
     *
     * There is a maximum attendance points which can be different from the value provided by 100% attendance over the full period. This allows for
     * forgiveness of a certain number of absences or tardies. For example, `maxAttendancePoints` value of 18.5 with a 10-week rolling period means
     * that a raider can miss 1 raid and be tardy for 1 raid, and then they fall behind.
     */
    r.attendance_points =
      Math.round((r.attendance_percentage * r.raid_count) / 0.5) * 0.5;
    if (r.attendance_points > environment.maxAttendancePoints) {
      r.attendance_points = environment.maxAttendancePoints;
    }
    r.wishlist = r.wishlist.map((w) => {
      /**
       * A raider's points for an item are as follows: their attendance points (see above) + the position on the list (inverted).
       * For example, at wishlist position 1, if there are a max of 50 items on the list, we take the absolute value of 1 - (50 + 1) to give a score of 50 for the top ranking.
       */
      w.ranking_points = Math.abs(
        w.pivot.order - (environment.wishlistLength + 1)
      );
      w.raider_points = r.attendance_points + w.ranking_points;

      return w;
    });

    /**
     * Eligible loot is loot that is wishlisted, but not yet received
     */
    r.eligible_loot = r.wishlist.filter((w) => !w.pivot?.is_received);

    /**
     * Instantiate date fields
     */
    r.received = r.received.map((ri) => {
      ri.pivot.received_at = ri.pivot.received_at
        ? new Date(ri.pivot.received_at)
        : ri.pivot.received_at;
      ri.pivot.created_at = ri.pivot.created_at
        ? new Date(ri.pivot.created_at)
        : ri.pivot.created_at;
      ri.pivot.updated_at = ri.pivot.updated_at
        ? new Date(ri.pivot.updated_at)
        : ri.pivot.updated_at;
      return ri;
    });

    return r;
  });
/**
 * Process ThatsMyBis data.
 */
@Injectable({
  providedIn: 'root',
})
export class TmbService {
  private refresh$ = new BehaviorSubject<void>(undefined);
  raiders$: Observable<Raider[]> = this.refresh$.pipe(
    switchMap(() =>
      this.http.get('assets/tmb-data.json', {
        headers: new HttpHeaders({
          'Cache-Control':
            'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
          Pragma: 'no-cache',
          Expires: '0',
        }),
      })
    ),
    tap((raiders: Raider[]) => this.checkNewData(raiders)),
    map((raiders: Raider[]) => processRaiders(raiders)),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getRaiders(): Observable<Raider[]> {
    return this.raiders$;
  }

  getByName(name: string): Observable<Raider> {
    return this.raiders$.pipe(
      map((raiders) =>
        raiders.find(
          (r) => r.name.toLocaleLowerCase() === name.toLocaleLowerCase()
        )
      )
    );
  }

  refresh() {
    this.refresh$.next();
  }

  /**
   * Compares the retrieved TMB data to our cached hash of the previous TMB data.
   * If they differ, it notifies the user that new data was loaded.
   * Cache the new hash.
   */

  private async checkNewData(raiders: Raider[]) {
    var newSha = await sha256(JSON.stringify(raiders));
    var cachedSha = await this.cacheService.get<TmbShaCache>('_tmbSha');
    var today = new Date();

    // Warn of stale data.
    if (cachedSha && newSha === cachedSha.sha) {
      var daysCached = Math.floor(
        (+today - +new Date(cachedSha.date)) / (1000 * 60 * 60 * 24)
      );
      if (
        // If the cache is ever 5+ days old, warn always
        daysCached > 4 ||
        // if today is thursday and the cache is 1+ days old (it must always be updated after tuesday)
        (today.getDay() == 4 && daysCached > 1)
      ) {
        Swal.fire({
          position: 'top',
          toast: true,
          icon: 'warning',
          title: 'The TMB data may be out of date!',
          showConfirmButton: true,
          timer: 15000,
        });
      }
    }
    if (!cachedSha || newSha !== cachedSha.sha) {
      Swal.fire({
        position: 'top',
        toast: true,
        icon: 'success',
        title: 'The TMB data was updated!',
        showConfirmButton: false,
        timer: 4000,
      });
      // Cache the new value
      await this.cacheService.set<TmbShaCache>('_tmbSha', {
        date: today.toISOString(),
        sha: newSha,
      });
    }
  }
}
