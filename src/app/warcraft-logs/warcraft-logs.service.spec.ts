import { TestBed } from '@angular/core/testing';

import { WarcraftLogsService } from './warcraft-logs.service';

describe('WarcraftLogsService', () => {
  let service: WarcraftLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarcraftLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
