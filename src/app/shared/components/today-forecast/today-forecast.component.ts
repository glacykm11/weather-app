import { Component, Input } from '@angular/core';
import { TodayForecast } from '../../interfaces/weather-forecast.interface';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.scss']
})
export class TodayForecastComponent {
  @Input() todayForecasts!: TodayForecast[];
}
