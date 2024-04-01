import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBResultsComponent } from './c-bresults.component';

describe('CBResultsComponent', () => {
  let component: CBResultsComponent;
  let fixture: ComponentFixture<CBResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CBResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
