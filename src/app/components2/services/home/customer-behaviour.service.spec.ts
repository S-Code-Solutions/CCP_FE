import { TestBed } from '@angular/core/testing';

import { CustomerBehaviourService } from './customer-behaviour.service';

describe('CustomerBehaviourService', () => {
  let service: CustomerBehaviourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerBehaviourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
