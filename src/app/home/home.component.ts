import { Component, OnInit } from '@angular/core';
import { WheatherMapService } from '../shared/services/wheather-map/wheather-map.service';
import { Observable, take } from 'rxjs';
import { TodayForecast } from '../shared/interfaces/weather-forecast.interface';
import { Hour } from '../shared/interfaces/weather-api-forecast.interface';
import { WeatherApiService } from '../shared/services/weather-api/weather-api.service';
import { WeatherInitialInfo } from '../shared/interfaces/weather-info.interface';

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
  public weatherInfoSlz$!: Observable<WeatherInitialInfo[]>;
  private weatherApiForecastSlz$!: Observable<Hour[]>;

  constructor(
    private wheatherMapService: WheatherMapService,
    private weatherApiService: WeatherApiService
  ) {}

  ngOnInit() {
    this.getWheatherSlz();
    this.getSlzWeatherForecast();
  }

  public seeMoreButtonEvent(event: any) {
    this.seeMoreButton = !this.seeMoreButton;
  }

  private getWheatherSlz(): void {
    this.weatherInfoSlz$ = this.wheatherMapService.getWheatherSlz();
  }

  private getSlzWeatherForecast(): void {
    this.weatherApiForecastSlz$ = this.weatherApiService.getForecast();

    this.weatherApiForecastSlz$.pipe(take(1)).subscribe((response: Hour[]) => {
      const hours = response;
      this.generateTodayForecasts(hours);
    });
  }

  private generateTodayForecasts(hours: Hour[]): void {
    for (let i = 6; i < 22; i += 3) {
      this.todayForecasts.push({
        time: hours[i].time.substring(11),
        temperature: hours[i].temp_c,
        icon: hours[i].condition.icon,
      });
    }
  }
}
