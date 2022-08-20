import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from 'src/app/state/state.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap, withLatestFrom } from 'rxjs/operators';
import {
  faSync,
  faFileExcel,
  faChartPie,
  faChartLine,
  faUsers,
  faObjectGroup,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { LootListFacadeService } from 'src/app/loot-list/loot-list.facade';
import { environment } from 'src/environments/environment';
import { ZoneService } from 'src/app/zone/zone.service';
import { Raider } from 'src/app/tmb/models/tmb.interface';
import { TmbService } from 'src/app/tmb/tmb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  sheetUrl = `https://docs.google.com/spreadsheets/d/${environment.sheetId}/edit`;
  tmbUrl = environment.tmbBaseUrl;
  logsGuildUrl = environment.logsGuildUrl;
  form: UntypedFormGroup;
  faSync = faSync;
  faFileExcel = faFileExcel;
  faGroup = faObjectGroup;
  faChartPie = faChartPie;
  faChartLine = faChartLine;
  faUsers = faUsers;
  faCog = faCog;
  autoUpdate = false;
  isActive = false;
  constructor(
    public state: StateService,
    public zoneService: ZoneService,
    public lootListFacade: LootListFacadeService,
    private tmbService: TmbService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      selectedRaider: null,
    });
    const raiderControl = this.form.get(
      'selectedRaider'
    ) as FormControl<Raider>;
    this.state.selectedRaiderName$
      .pipe(
        takeUntil(this.destroyed$),
        withLatestFrom(this.tmbService.raiders$),
        tap(([raiderName, allRaiders]) => {
          const raider = allRaiders.find((r) => r.name === raiderName);
          raiderControl.setValue(raider, { emitEvent: false, onlySelf: true });
        })
      )
      .subscribe();

    raiderControl.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        tap((selectedRaider) => {
          this.state.setState({ selectedRaiderName: selectedRaider.name });
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
    const raiderControl = this.form.get(
      'selectedRaider'
    ) as FormControl<Raider>;
    raiderControl.setValue(null);
  }
}
