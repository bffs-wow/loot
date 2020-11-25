import { TestBed } from '@angular/core/testing';

import { LootAnnounceService } from './loot-announce.service';

describe('LootAnnounceService', () => {
  let service: LootAnnounceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LootAnnounceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
