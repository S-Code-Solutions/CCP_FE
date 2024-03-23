import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBehaviourComponent } from './customer-behaviour.component';

describe('CustomerBehaviourComponent', () => {
  let component: CustomerBehaviourComponent;
  let fixture: ComponentFixture<CustomerBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBehaviourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
