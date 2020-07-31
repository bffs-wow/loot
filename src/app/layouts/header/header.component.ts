import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from 'src/app/state/state.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { faSync, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { LootListFacadeService } from 'src/app/loot-list/loot-list.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  sheetUrl =
    'https://docs.google.com/spreadsheets/d/1NCqKjPnzavcaVH_uEqVcn0MXBlmknkpM4an9ADe81Zs/edit#gid=604423388';
  form: FormGroup;
  faSync = faSync;
  faFileExcel = faFileExcel;
  autoUpdate = false;
  isActive = false;
  constructor(
    public state: StateService,
    public lootListFacade: LootListFacadeService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectedRaider: null,
    });
    const raiderControl = this.form.get('selectedRaider') as FormControl;
    this.state.selectedRaider$
      .pipe(
        takeUntil(this.destroyed$),
        tap((raider) => {
          raiderControl.setValue(raider, { emitEvent: false, onlySelf: true });
        })
      )
      .subscribe();

    raiderControl.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        tap((selectedRaider) => {
          this.state.setState({ selectedRaider });
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  reloadData() {
    this.lootListFacade.reloadData();
  }

  autoUpdateToggled() {
    this.state.setState({ autoUpdate: this.autoUpdate });
  }

  clearRaider() {
    const raiderControl = this.form.get('selectedRaider') as FormControl;
    raiderControl.setValue(null);
  }
}
