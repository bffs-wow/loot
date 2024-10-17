import { Component, OnInit } from '@angular/core';
import {
  faGavel,
  faLeaf,
  faQuestionCircle,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
import { Class } from '../loot-list/models/class.model';
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
    Class.DeathKnight,
  ];
  constructor(private stateService: StateService) { }

  ngOnInit(): void { }

  makeClassObs(cls: Class) {
    return this.stateService.raiders$.pipe(
      map((raiders) =>
        raiders
          .filter((r) => r.class === cls)
          .sort((a, b) => b.attendance_points - a.attendance_points)
      )
    );
  }

  getIcon(archetype) {
    switch (archetype) {
      case 'DPS': {
        return faGavel;
      }
      case 'Heal': {
        return faLeaf;
      }
      case 'Tank': {
        return faShieldAlt;
      }
      default: {
        console.log(`Unknown Archetype ${archetype}`);
        return faQuestionCircle;
      }
    }
  }
}
