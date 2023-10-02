import { TestBed } from '@angular/core/testing';

import { InsulineDozesService } from './insuline-dozes.service';

describe('InsulineDozesService', () => {
  let service: InsulineDozesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsulineDozesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
