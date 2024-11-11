import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { CacheService } from '../cache/cache.service';
import add from 'date-fns/add';
import { Raider } from '../tmb/models/tmb.interface';
import isNil from 'lodash-es/isNil';

export interface AppState {
  selectedRaiderName: string;
  raiders: Raider[];
  maxAttendancePoints: number;
  autoUpdate: boolean;
}
const _initialState: AppState = {
  selectedRaiderName: null,
  raiders: [],
  maxAttendancePoints: 0,
  autoUpdate: false,
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private cachedStateKeys = ['selectedRaiderName'];

  private state = new BehaviorSubject(_initialState);
  get rawState() {
    return this.state.getValue();
  }
  state$ = this.state.asObservable();

  selectedRaiderName$ = this.state$.pipe(map((s) => s.selectedRaiderName));
  selectedRaider$ = this.state$.pipe(
    map((s) => s.raiders.find((r) => r.name === s.selectedRaiderName))
  );
  raiders$ = this.state$.pipe(map((s) => s.raiders));

  maxAttendancePoints$ = this.state$.pipe(map((s) => s.maxAttendancePoints));

  autoUpdate$ = this.state.pipe(
    map((s) => s.autoUpdate),
    distinctUntilChanged()
  );

  constructor(private cache: CacheService) {
    this.restoreCache();
  }

  setState(newState: Partial<AppState>): void {
    this.state.next({ ...this.rawState, ...newState });
    // update cache
    this.cacheState();
  }

  cacheState() {
    let objToCache: Partial<AppState> = this.cachedStateKeys.reduce((p, c) => {
      let cacheVal: Partial<AppState> = {};
      // Only cache non-null/unefined vals
      if (!isNil(this.rawState[c])) {
        cacheVal[c] = this.rawState[c];
      }
      return { ...p, ...cacheVal }
    }, {});

    // Only cache if we have data to cache - i.e. all of our 'cachedStateKeys' contained values
    if (Object.keys(objToCache).length === this.cachedStateKeys.length) {
      this.cache.set(
        `APP_STATE`,
        objToCache,
        add(new Date(), { days: 10 })
      );
    }
  }

  restoreCache() {
    this.cache
      .get(`APP_STATE`)
      .then((res: Partial<AppState>) => (res === null ? {} : res))
      .then((cached) => this.setState({ ...cached }));
  }
}
