import { Component, OnInit } from '@angular/core';
import { WeatherMapService } from '../shared/services/wheather-map/weather-map.service';
import { Observable, take } from 'rxjs';
import { TodayForecast } from '../shared/interfaces/weather-forecast.interface';
import { Hour } from '../shared/interfaces/weather-api-forecast.interface';
import { WeatherApiService } from '../shared/services/weather-api/weather-api.service';
import { WeatherInitialInfo } from '../shared/interfaces/weather-info.interface';
import { LocationService } from '../shared/services/location/location.service';
import { Location } from '../shared/interfaces/location.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public todayForecasts: TodayForecast[] = [];
  public seeMoreButton: boolean = false;
  public weatherInfoCity$!: Observable<WeatherInitialInfo[]>;
  private weatherApiForecastSlz$!: Observable<Hour[]>;

  constructor(
    private weatherMapService: WeatherMapService,
    private weatherApiService: WeatherApiService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.getWheatherLocation();
    this.getSlzWeatherForecast();
  }

  public seeMoreButtonEvent(event: void) {
    this.seeMoreButton = !this.seeMoreButton;
  }

  private getWheatherLocation(): void {
    this.locationService.getPosition().then(
      (position: Location) => {
        this.weatherInfoCity$ =
          this.weatherMapService.getWheatherCity(position);
      },
      (error) => {
        this.weatherInfoCity$ = this.weatherMapService.getWheatherCity();
        console.error(error);
      }
    );
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
