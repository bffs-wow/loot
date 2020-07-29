import { Component, OnInit } from '@angular/core';

import { LootListFacadeService } from '../loot-list.facade'

@Component({
  selector: 'app-sheet-info',
  templateUrl: './sheet-info.component.html',
  styleUrls: ['./sheet-info.component.scss']
})
export class SheetInfoComponent implements OnInit {

  constructor(public lootList: LootListFacadeService) { }

  ngOnInit(): void {
  }

}
