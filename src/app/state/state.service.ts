import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Raider } from '../loot-list/models/raider.model';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { CacheService } from '../cache/cache.service';
import pick from 'lodash-es/pick';
import add from 'date-fns/add';

export interface AppState {
  selectedRaider: Raider;
  raiders: Raider[];
  autoUpdate: boolean;
}
const _initialState: AppState = {
  selectedRaider: null,
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

  selectedRaider$ = this.state$.pipe(map((s) => s.selectedRaider));
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
    this.cache.set(`APP_STATE`, pick(this.rawState, ['selectedRaider']), add(new Date(), { days: 10 }));
  }

  restoreCache() {
    this.cache
      .get(`APP_STATE`)
      .then((res) => (res === null ? {} : res))
      .then(({ selectedRaider }) => this.setState({ selectedRaider }));
  }
}
