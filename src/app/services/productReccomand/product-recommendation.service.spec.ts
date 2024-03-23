import { TestBed } from '@angular/core/testing';

import { ProductRecommendationService } from './product-recommendation.service';

describe('ProductRecommendationService', () => {
  let service: ProductRecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRecommendationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
