import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { LootListFacadeService } from './loot-list.facade';

@Component({
  selector: 'app-loot-list',
  templateUrl: './loot-list.component.html',
  styleUrls: ['./loot-list.component.scss']
})
export class LootListComponent implements OnInit {
  constructor(public state: StateService, public lootListFacade: LootListFacadeService) { }

  ngOnInit(): void {
  }

}
