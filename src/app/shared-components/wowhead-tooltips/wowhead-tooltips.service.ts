import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, tap, throttle, throttleTime } from 'rxjs/operators';

declare var $WowheadPower: any;

@Injectable({ providedIn: 'root' })
export class WowheadTooltipsService {
  private _refreshDebouncer = new Subject();

  constructor() {
    this._refreshDebouncer
      .pipe(
        throttleTime(100),
        debounceTime(400),
        tap(() => {
          // Refresh all links on page
          $WowheadPower.refreshLinks();
        })
      )
      .subscribe();
  }

  refreshLinks() {
    this._refreshDebouncer.next();
  }
}
