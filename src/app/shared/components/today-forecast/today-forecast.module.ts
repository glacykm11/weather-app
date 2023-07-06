import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayForecastComponent } from './today-forecast.component';

@NgModule({
  declarations: [TodayForecastComponent],
  imports: [
    CommonModule
  ],
  exports: [TodayForecastComponent],
})
export class TodayForecastModule { }
