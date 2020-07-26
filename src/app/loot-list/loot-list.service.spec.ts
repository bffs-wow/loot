import { TestBed } from '@angular/core/testing';

import { LootListService } from './loot-list.service';

describe('LootListService', () => {
  let service: LootListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LootListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
