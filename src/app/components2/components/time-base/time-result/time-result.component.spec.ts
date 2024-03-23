import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeResultComponent } from './time-result.component';

describe('TimeResultComponent', () => {
  let component: TimeResultComponent;
  let fixture: ComponentFixture<TimeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
