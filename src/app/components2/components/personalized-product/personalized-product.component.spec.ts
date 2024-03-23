import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedProductComponent } from './personalized-product.component';

describe('PersonalizedProductComponent', () => {
  let component: PersonalizedProductComponent;
  let fixture: ComponentFixture<PersonalizedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
