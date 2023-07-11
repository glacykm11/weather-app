import { Component, OnInit } from '@angular/core';
import { WheatherMapService } from '../shared/services/wheather-map/wheather-map.service';
import { OpenMeteoService } from '../shared/services/open-meteo/open-meteo.service';
import { Observable, Subject, take } from 'rxjs';
import { Hourly, HourlyUnits, TodayForecast, WeatherForecast } from '../shared/interfaces/weather-forecast.interface';
import { WeatherInfo } from '../shared/interfaces/weather-info.interface';

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
  private weatherForecastSlz$!: Observable<WeatherForecast>;

  constructor(private wheatherMapService: WheatherMapService, private openMeteoService: OpenMeteoService) { }

  ngOnInit() {
    this.getWheatherSlz();
    this.getSlzWeatherForecast();
  }

  private getWheatherSlz() {
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

  private getSlzWeatherForecast() {
    this.weatherForecastSlz$ = this.openMeteoService.getWheatherForecastSlz();

    this.weatherForecastSlz$
      .pipe(take(1))
      .subscribe((response: WeatherForecast) => {
        const times = response.hourly.time;
        const temperatures = response.hourly.temperature_2m;
        const todayForecasts = this.generateTodayForecasts(times, temperatures);

        this.todayForecasts = this.todayForecasts.concat(...todayForecasts);
        console.log(this.todayForecasts);
      })
  }

  private generateTodayForecasts(times: string[], temperatures: number[]): TodayForecast[] {
    const todayForecasts = [];

    for (let i = 6; i < 22; i += 3) {
      todayForecasts.push({ "time": times[i].substring(11), "temperature": temperatures[i] })
    }

    return todayForecasts;
  }
}