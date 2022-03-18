import { TestBed } from '@angular/core/testing';

import { HardCodingDataService } from './hard-coding-data.service';

describe('HardCodingDataService', () => {
  let service: HardCodingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardCodingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
