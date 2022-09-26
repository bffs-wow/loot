import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from '../state/state.service';
import { LootListFacadeService } from '../loot-list/loot-list.facade';
import { Observable, combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { faChartLine, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

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
  environment = environment;

  constructor(
    private route: ActivatedRoute,
    private state: StateService,
    private statisticsService: StatisticsService,
    private lootListFacade: LootListFacadeService,
    private tmbService: TmbService
  ) {}

  ngOnInit(): void {
    this.raider$ = combineLatest([
      this.route.params,
      this.tmbService.raiders$,
    ]).pipe(
      map(([params, raiders]) => raiders.find((l) => l.name === params.name)),
      tap((raider) => {
        this.listProgress =
          this.statisticsService.getRaiderListProgress(raider);
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

  getAttendancePointsClass(points: number) {
    if (points >= environment.maxAttendancePoints) {
      return 'is-success';
    }
    if (points > environment.maxAttendancePoints * 0.75) {
      return 'is-warning';
    }
    return 'is-danger';
  }
}
