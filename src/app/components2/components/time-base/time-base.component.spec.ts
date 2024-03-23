import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBaseComponent } from './time-base.component';

describe('TimeBaseComponent', () => {
  let component: TimeBaseComponent;
  let fixture: ComponentFixture<TimeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
