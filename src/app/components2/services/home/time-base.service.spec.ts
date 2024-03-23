import { TestBed } from '@angular/core/testing';

import { TimeBaseService } from './time-base.service';

describe('TimeBaseService', () => {
  let service: TimeBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
