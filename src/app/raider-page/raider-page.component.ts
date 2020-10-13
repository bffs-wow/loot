import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state/state.service';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { Raider } from '../loot-list/models/raider.model';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import {
  Attendance,
  AttendancePoints,
} from '../loot-list/models/attendance.model';
import {
  faCheck,
  faExclamationTriangle,
  faTimes,
  faQuestion,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

import { StatisticsService } from '../statistics/statistics.service';
import { raiderToWowNameMap } from '../data/raider-to-wow-name';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-raider-page',
  templateUrl: './raider-page.component.html',
  styleUrls: ['./raider-page.component.scss'],
})
export class RaiderPageComponent implements OnInit {
  raider$: Observable<Raider>;
  faChartLine = faChartLine;

  listProgress = undefined;

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private statisticsService: StatisticsService,
    private lootListFacade: LootListFacadeService
  ) {}

  ngOnInit(): void {
    this.raider$ = combineLatest([
      this.route.params,
      this.lootListFacade.raiders$,
    ]).pipe(
      map(([params, raiders]) => raiders.find((l) => l.name === params.name)),
      tap((raider) => {
        this.listProgress = this.statisticsService.getRaiderListProgress(
          raider
        );
      })
    );
  }

  getIcon(points: AttendancePoints) {
    switch (points) {
      case AttendancePoints.Full: {
        return faCheck;
      }
      case AttendancePoints.Partial: {
        return faExclamationTriangle;
      }
      case AttendancePoints.None: {
        return faTimes;
      }
      default: {
        return faQuestion;
      }
    }
  }
  getTagColor(points: AttendancePoints) {
    switch (points) {
      case AttendancePoints.Full: {
        return 'is-success';
      }
      case AttendancePoints.Partial: {
        return 'is-warning';
      }
      case AttendancePoints.None: {
        return 'is-danger';
      }
      default: {
        return 'is-info';
      }
    }
  }

  makeLogsUrl(raider: Raider) {
    let name = raider.name;
    // check if char name is diff from sheet name
    if (raiderToWowNameMap[name]) {
      name = raiderToWowNameMap[name];
    }

    return `${environment.logsCharacterBaseUrl}${name}`;
  }
}
