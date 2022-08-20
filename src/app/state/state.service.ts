import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { CacheService } from '../cache/cache.service';
import pick from 'lodash-es/pick';
import add from 'date-fns/add';
import { Raider } from '../tmb/models/tmb.interface';

export interface AppState {
  selectedRaiderName: string;
  raiders: Raider[];
  autoUpdate: boolean;
}
const _initialState: AppState = {
  selectedRaiderName: null,
  raiders: [],
  autoUpdate: false,
};

@Injectable({
  providedIn: 'root',
})
export class StateService {
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
    this.cache.set(
      `APP_STATE`,
      pick(this.rawState, ['selectedRaiderName']),
      add(new Date(), { days: 10 })
    );
  }

  restoreCache() {
    this.cache
      .get(`APP_STATE`)
      .then((res: Partial<AppState>) => (res === null ? {} : res))
      .then(({ selectedRaiderName }) => this.setState({ selectedRaiderName }));
  }
}
