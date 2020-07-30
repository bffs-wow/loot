import { Component, OnInit } from '@angular/core';
import { StateService } from "../state/state.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public state: StateService) { }

  ngOnInit(): void {
  }

}
