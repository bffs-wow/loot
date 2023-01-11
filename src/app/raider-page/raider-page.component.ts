import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state/state.service';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import {
  faChartLine,
  faGavel,
  faLeaf,
  faQuestionCircle,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

import { StatisticsService } from '../statistics/statistics.service';
import { raiderToWowNameMap } from '../data/raider-to-wow-name';
import { environment } from 'src/environments/environment';
import { Raider } from '../tmb/models/tmb.interface';
import { TmbService } from '../tmb/tmb.service';

@Component({
  selector: 'app-raider-page',
  templateUrl: './raider-page.component.html',
  styleUrls: ['./raider-page.component.scss'],
})
export class RaiderPageComponent implements OnInit {
  raider$: Observable<Raider>;
  faChartLine = faChartLine;
  faShieldAlt = faShieldAlt;

  listProgress = undefined;
  // Wrap in an object to use within *ngIf
  maxAttendancePoints$ = this.state.maxAttendancePoints$.pipe(
    map((points) => ({ points }))
  );

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private statisticsService: StatisticsService
  ) {}

  ngOnInit(): void {
    this.raider$ = combineLatest([this.route.params, this.state.raiders$]).pipe(
      map(([params, raiders]) => raiders.find((l) => l.name === params.name)),
      tap((raider) => {
        this.listProgress = raider
          ? this.statisticsService.getRaiderListProgress(raider)
          : undefined;
      })
    );
  }

  makeLogsUrl(raider: Raider) {
    let name = raider.name;
    // check if char name is diff from sheet name
    if (raiderToWowNameMap[name]) {
      name = raiderToWowNameMap[name];
    }

    return `${environment.logsCharacterBaseUrl}${name}`;
  }

  makeTmbUrl(raider: Raider) {
    return `${environment.tmbBaseUrl}c/${raider.id}/${raider.name}`;
  }

  getAttendanceTagClass(percentage: number) {
    if (percentage > 0.9) {
      return 'is-success';
    }
    if (percentage > 0.75) {
      return 'is-warning';
    }
    return 'is-danger';
  }

  getAttendancePointsClass(points: number, max: number) {
    if (points >= max) {
      return 'is-success';
    }
    if (points > max * 0.75) {
      return 'is-warning';
    }
    return 'is-danger';
  }

  getArchetypeIcon(archetype) {
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
