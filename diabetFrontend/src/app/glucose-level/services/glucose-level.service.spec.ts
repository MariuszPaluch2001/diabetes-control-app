import { TestBed } from '@angular/core/testing';

import { GlucoseLevelService } from './glucose-level.service';

describe('GlucoseLevelService', () => {
  let service: GlucoseLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlucoseLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
