import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Class } from '../loot-list/models/raider.model';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss'],
})
export class RosterPageComponent implements OnInit {
  allClasses = [
    Class.Warrior,
    Class.Priest,
    Class.Shaman,
    Class.Druid,
    Class.Hunter,
    Class.Mage,
    Class.Rogue,
    Class.Warlock,
    Class.Paladin,
  ];
  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  makeClassObs(cls: Class) {
    return this.stateService.raiders$.pipe(
      map((raiders) =>
        raiders
          .filter((r) => r.class === cls)
          .sort((a, b) => b.attendancePoints - a.attendancePoints)
      )
    );
  }
}
