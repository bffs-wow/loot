import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
} from '@angular/forms';
import { StateService } from '../../state/state.service';
import { Observable, Subject, concat, of } from 'rxjs';

import {
  map,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
  debounceTime,
  startWith,
  filter,
} from 'rxjs/operators';
import { LootListFacadeService } from '../../loot-list/loot-list.facade';
import { LootAnnounceService } from '../../loot-announce/loot-announce.service';
import {
  faBullhorn,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { ItemService } from '../../tmb/item.service';
import { LootGroup } from 'src/app/loot-list/models/loot-group.model';
import { BaseWowItem, CsvItem } from 'src/app/tmb/models/item.interface';
import uniqBy from 'lodash-es/uniqBy';
import { LootRanking } from 'src/app/loot-list/models/ranking.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loot-lookup',
  templateUrl: './loot-lookup.component.html',
  styleUrls: ['./loot-lookup.component.scss'],
})
export class LootLookupComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();

  @Input() item: CsvItem = null;
  @Input() disabled = false;
  @Input() noSearch = false;
  @Input() hideSource = false;

  form: UntypedFormGroup;

  items$: Observable<CsvItem[]>;
  loading = false;
  input$ = new Subject<string>();

  faBullhorn = faBullhorn;
  faExclamationTriangle = faExclamationTriangle;

  selectedItem$: Observable<LootGroup[]>;

  constructor(
    private router: Router,
    public state: StateService,
    protected itemService: ItemService,
    private lootListFacade: LootListFacadeService,
    public fb: UntypedFormBuilder,
    public lootAnnounceService: LootAnnounceService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      selectedItem: new UntypedFormControl({
        value: this.item,
        disabled: this.disabled,
      }),
    });
    // Typeahead setup
    this.items$ = concat(
      of([]), // default items
      this.input$.pipe(
        distinctUntilChanged(),
        debounceTime(250),
        tap(() => (this.loading = true)),
        switchMap((term) =>
          this.itemService.allItems$.pipe(
            map((items) =>
              items.filter((i) =>
                i.name.toLowerCase().includes(term.toLowerCase())
              )
            ),
            map((results) => uniqBy(results, 'id')),
            catchError(() => of([])), // empty list on error
            tap(() => (this.loading = false))
          )
        )
      )
    );

    const selectedItem = this.form.get('selectedItem') as UntypedFormControl;

    this.selectedItem$ = selectedItem.valueChanges.pipe(
      startWith(this.item),
      filter((i) => !!i),
      switchMap((item: CsvItem) =>
        this.lootListFacade.getRankedLootGroups(item.id).pipe(
          tap(groups => {
            if (groups.length === 0) {
              this.router.navigate(['item', item.id]);
            }
          })
        )
      ),
    );
  }

  async copyToClipBoard(grp: LootGroup[]) {
    await this.lootAnnounceService.copyLootAnnouncement(grp);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  trackByFn(item: BaseWowItem) {
    return item.item_id;
  }

  /**
 * Returns true if none of the loot in the array is listed directly on someone's loot list
 * @param items
 * @returns
 */
  noneListed(items: LootRanking[]) {
    return items && items.every((i) => i.item.pivot.note === 'Unlisted');
  }
}
