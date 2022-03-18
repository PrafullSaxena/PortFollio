import { TestBed } from '@angular/core/testing';

import { SwitchingThemesService } from './switching-themes.service';

describe('SwitchingThemesService', () => {
  let service: SwitchingThemesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwitchingThemesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
