import { TestBed } from '@angular/core/testing';

import { LocalStorageControlService } from './local-storage-control.service';

describe('LocalStorageControlService', () => {
  let service: LocalStorageControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
