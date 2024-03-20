import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRecommendationComponent } from './precommendation.component';

describe('PRecommendationComponent', () => {
  let component: PRecommendationComponent;
  let fixture: ComponentFixture<PRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
