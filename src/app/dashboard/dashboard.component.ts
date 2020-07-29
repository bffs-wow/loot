import { Component, OnInit } from '@angular/core';
import { StateService } from "../state/state.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  raiders$ = this.state.raiders$;
  constructor(private state: StateService) { }

  ngOnInit(): void {
  }

}
