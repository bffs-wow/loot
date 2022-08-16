import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from 'src/app/state/state.service';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import {
  faSync,
  faFileExcel,
  faChartPie,
  faChartLine,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { LootListFacadeService } from 'src/app/loot-list/loot-list.facade';
import { environment } from 'src/environments/environment';
import { ZoneService } from 'src/app/wow-data/zone.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  sheetUrl = `https://docs.google.com/spreadsheets/d/${environment.sheetId}/edit`;
  logsGuildUrl = environment.logsGuildUrl;
  form: UntypedFormGroup;
  faSync = faSync;
  faFileExcel = faFileExcel;
  faChartPie = faChartPie;
  faChartLine = faChartLine;
  faUsers = faUsers;
  autoUpdate = false;
  isActive = false;
  constructor(
    public state: StateService,
    public zoneService: ZoneService,
    public lootListFacade: LootListFacadeService,
    private fb: UntypedFormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      selectedRaider: null,
    });
    const raiderControl = this.form.get('selectedRaider') as UntypedFormControl;
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
    const raiderControl = this.form.get('selectedRaider') as UntypedFormControl;
    raiderControl.setValue(null);
  }
}
