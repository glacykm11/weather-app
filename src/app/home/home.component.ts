import { Component, OnInit } from '@angular/core';
import { WheatherMapService } from '../shared/services/wheather-map/wheather-map.service';
import { Observable, take } from 'rxjs';
import { TodayForecast } from '../shared/interfaces/weather-forecast.interface';
import { WeatherInfo } from '../shared/interfaces/weather-info.interface';
import { Hour, WeatherApiForecast } from '../shared/interfaces/weather-api-forecast.interface';
import { WeatherApiService } from '../shared/services/weather-api/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public wheather!: any;
  public main!: any;
  public description!: any;
  public todayForecasts: TodayForecast[] = [];
  private weatherInfoSlz$!: Observable<WeatherInfo>;
  private weatherApiForecastSlz$!: Observable<WeatherApiForecast>;

  constructor(private wheatherMapService: WheatherMapService, private weatherApiService: WeatherApiService) { }

  ngOnInit() {
    this.getWheatherSlz();
    this.getSlzWeatherForecast();
  }

  private getWheatherSlz(): void {
    this.weatherInfoSlz$ = this.wheatherMapService.getWheatherSlz();

    this.weatherInfoSlz$
      .pipe(take(1))
      .subscribe((response: WeatherInfo) => {
        this.wheather = response;
        const [wheather] = this.wheather.weather;
        const { main, description } = wheather;
        this.main = main;
        this.description = description;
      })
  }

  private getSlzWeatherForecast(): void {
    this.weatherApiForecastSlz$ = this.weatherApiService.getForecast();

    this.weatherApiForecastSlz$
      .pipe(take(1))
      .subscribe((response: WeatherApiForecast) => {
        const hours = response.forecast.forecastday[0].hour;
        const todayForecasts = this.generateTodayForecasts(hours);

        this.todayForecasts = this.todayForecasts.concat(...todayForecasts);
      })
  }

  private generateTodayForecasts(hours: Hour[]): TodayForecast[] {
    const todayForecasts = [];

    for (let i = 6; i < 22; i += 3) {
      todayForecasts.push({ "time": hours[i].time.substring(11), "temperature": hours[i].temp_c, "icon": hours[i].condition.icon })
    }

    return todayForecasts;
  }
}