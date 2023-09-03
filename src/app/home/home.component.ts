import { Component, OnInit } from '@angular/core';
import { WheatherMapService } from '../shared/services/wheather-map/wheather-map.service';
import { Observable, take } from 'rxjs';
import { TodayForecast } from '../shared/interfaces/weather-forecast.interface';
import { WeatherInfo } from '../shared/interfaces/weather-info.interface';
import {
  Hour,
  WeatherApiForecast,
} from '../shared/interfaces/weather-api-forecast.interface';
import { WeatherApiService } from '../shared/services/weather-api/weather-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public wheather!: any;
  public main!: any;
  public description!: any;
  public todayForecasts: TodayForecast[] = [];
  public seeMoreButton: boolean = false;
  public weatherInfoSlz$!: any;
  private weatherApiForecastSlz$!: Observable<WeatherApiForecast>;

  constructor(
    private wheatherMapService: WheatherMapService,
    private weatherApiService: WeatherApiService
  ) {}

  ngOnInit() {
    this.getWheatherSlz();
    // this.getSlzWeatherForecast();
  }

  public teste(event: any) {
    console.log('Capturando clique botão saiba mais');
    this.seeMoreButton = !this.seeMoreButton;
  }

  private getWheatherSlz(): void {
    this.weatherInfoSlz$ = this.wheatherMapService.getWheatherSlz();
  }

  private getSlzWeatherForecast(): void {
    this.weatherApiForecastSlz$ = this.weatherApiService.getForecast();

    this.weatherApiForecastSlz$
      .pipe(take(1))
      .subscribe((response: WeatherApiForecast) => {
        const hours = response.forecast.forecastday[0].hour;
        const todayForecasts = this.generateTodayForecasts(hours);

        this.todayForecasts = this.todayForecasts.concat(...todayForecasts);
      });
  }

  private generateTodayForecasts(hours: Hour[]): TodayForecast[] {
    const todayForecasts = [];

    for (let i = 6; i < 22; i += 3) {
      todayForecasts.push({
        time: hours[i].time.substring(11),
        temperature: hours[i].temp_c,
        icon: hours[i].condition.icon,
      });
    }

    return todayForecasts;
  }
}
