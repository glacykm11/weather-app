import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayForecastComponent } from './today-forecast.component';

describe('TodayForecastComponent', () => {
  let component: TodayForecastComponent;
  let fixture: ComponentFixture<TodayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
