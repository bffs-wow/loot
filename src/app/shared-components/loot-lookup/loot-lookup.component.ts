import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { StateService } from '../../state/state.service';
import { Observable, Subject, concat, of } from 'rxjs';
import {
  EligibleLoot,
  Loot,
  LootGroup,
} from '../../loot-list/models/loot.model';
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
import { ItemService } from '../../wow-data/item.service';

@Component({
  selector: 'app-loot-lookup',
  templateUrl: './loot-lookup.component.html',
  styleUrls: ['./loot-lookup.component.scss'],
})
export class LootLookupComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();

  @Input() item: Loot = null;
  @Input() disabled = false;
  @Input() noSearch = false;
  @Input() hideSource = false;

  form: UntypedFormGroup;

  items$: Observable<Loot[]>;
  loading = false;
  input$ = new Subject<string>();

  faBullhorn = faBullhorn;
  faExclamationTriangle = faExclamationTriangle;

  selectedItem$: Observable<LootGroup[]>;

  constructor(
    public state: StateService,
    private itemService: ItemService,
    private lootListFacade: LootListFacadeService,
    public fb: UntypedFormBuilder,
    public lootAnnounceService: LootAnnounceService
  ) {}

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
      switchMap((item) => this.lootListFacade.getRankedLootGroups(item.name))
    );
  }

  async copyToClipBoard(grp: LootGroup[]) {
    await this.lootAnnounceService.copyLootAnnouncement(grp);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  trackByFn(item: EligibleLoot) {
    return item.name;
  }
}
