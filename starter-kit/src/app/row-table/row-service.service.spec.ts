import { TestBed } from '@angular/core/testing';

import { RowServiceService } from './row-service.service';

describe('RowServiceService', () => {
  let service: RowServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RowServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
