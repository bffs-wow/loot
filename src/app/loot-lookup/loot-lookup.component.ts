import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StateService } from '../state/state.service';
import { Observable, Subject, concat, of } from 'rxjs';
import { EligibleLoot, Loot, LootGroup } from '../loot-list/models/loot.model';
import {
  map,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import groupBy from 'lodash-es/groupBy';
import { Dictionary } from 'lodash';
import { LootListFacadeService } from '../loot-list/loot-list.facade';

@Component({
  selector: 'app-loot-lookup',
  templateUrl: './loot-lookup.component.html',
  styleUrls: ['./loot-lookup.component.scss'],
})
export class LootLookupComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  form: FormGroup;

  items$: Observable<Loot[]>;
  loading = false;
  input$ = new Subject<string>();

  allItems$: Observable<Loot[]> = this.lootListFacade.allEligibleLoot$.pipe(
    map((loot) => {
      return loot.reduce((map, loot) => {
        map.set(loot.name, { name: loot.name, source: loot.source, id: loot.id });
        return map;
      }, new Map<string, Loot>());
    }),
    map((map) => Array.from(map.values()))
  );

  selectedItem$: Observable<LootGroup[]>;

  constructor(
    public state: StateService,
    private lootListFacade: LootListFacadeService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectedItem: null,
    });
    // Typeahead setup
    this.items$ = concat(
      this.allItems$, // default items
      this.input$.pipe(
        distinctUntilChanged(),
        tap(() => (this.loading = true)),
        switchMap((term) =>
          this.allItems$.pipe(
            map((items) =>
              items.filter((i) =>
                i.name.toLowerCase().includes(term.toLowerCase())
              )
            ),
            catchError(() => of([])), // empty list on error
            tap(() => (this.loading = false))
          )
        )
      )
    );

    const selectedItem = this.form.get('selectedItem') as FormControl;

    this.selectedItem$ = selectedItem.valueChanges.pipe(
      withLatestFrom(this.lootListFacade.allEligibleLoot$),
      map(([item, allLoot]) => {
        if (!item) {
          return [];
        }
        return allLoot.filter((l) => l.name === item.name);
      }),
      map((rankings) => {
        // build iterable / sortable groups by points
        return this.lootListFacade.groupAndSort(rankings);
      })
    );
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  trackByFn(item: EligibleLoot) {
    return item.name;
  }
}
