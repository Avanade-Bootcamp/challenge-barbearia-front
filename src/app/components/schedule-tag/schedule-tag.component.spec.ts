import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTagComponent } from './schedule-tag.component';

describe('ScheduleTagComponent', () => {
  let component: ScheduleTagComponent;
  let fixture: ComponentFixture<ScheduleTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
