import { Component, OnInit, OnDestroy } from '@angular/core';
import { StateService } from 'src/app/state/state.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<boolean>();
  form: FormGroup;
  faSpinner = faSpinner;
  constructor(public state: StateService, public fb: FormBuilder) {}

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

  raiderSelected() {}
}
