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
  public othersWeatherInfo = [];
  public seeMoreButton: boolean = false;
  public weatherInfoCity$!: Observable<WeatherInitialInfo[]>;
  private weatherApiForecastCity$!: Observable<Hour[]>;
  public getOthersWeatherInfo$!: Observable<any>;
  private location!: Location;
  public x!: any;

  constructor(
    private weatherMapService: WeatherMapService,
    private weatherApiService: WeatherApiService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.getWheatherLocation();
    //this.getOthersWeatherInfo();
  }

  public seeMoreButtonEvent(event: void) {
    this.seeMoreButton = !this.seeMoreButton;
  }

  private getWheatherLocation(): void {
    this.locationService.getPosition().then(
      (position: Location) => {
        this.weatherInfoCity$ =
          this.weatherMapService.getWheatherCity(position);
        this.getCityWeatherForecast(position);
        // this.getOthersWeatherInfo$ =
        //   this.weatherApiService.getOthersWeatherInfo(position);
        this.weatherApiService.getOthersWeatherInfo(position).subscribe((x) => {
          this.teste(x);
        });
      },
      (error) => {
        this.weatherInfoCity$ = this.weatherMapService.getWheatherCity();
        this.getCityWeatherForecast();
        console.error(error);
      }
    );
  }

  teste(x: any) {
    let y: any = [];
    const [otherWeatherInfo] = x;
    // {
    //   chanceOfRain: 85;
    //   feelsLike: 30.1;
    //   humidity: 79;
    //   pressure: 1012;
    //   sunset: '05:57 PM';
    //   uv: 1;
    //   visibility: 10;
    //   wind: 20.2
    // }

    const titles = ['title 1','title 2', 'title 3', 'title 4', 'title 5', 'title 6', 'title 7', 'title 8'];
    const keys = Object.keys(otherWeatherInfo);
    const values = Object.values(otherWeatherInfo);
    console.log(keys, values)
    const iconsPaths = ['icon 1','icon 2', 'icon 3', 'icon 4', 'icon 5', 'icon 6', 'icon 7', 'icon 8'] ;
    // [{title: '', icon: '', value: ''}]
    otherWeatherInfo
  }

  private getOthersWeatherInfo() {}

  private getCityWeatherForecast(position?: Location): void {
    this.weatherApiForecastCity$ = this.weatherApiService.getForecast(position);

    this.weatherApiForecastCity$.pipe(take(1)).subscribe((response: Hour[]) => {
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
