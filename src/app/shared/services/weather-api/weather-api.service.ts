import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  Hour,
  WeatherApiForecast,
} from '../../interfaces/weather-api-forecast.interface';
import { Location } from '../../interfaces/location.interface';
import { enviroment } from 'src/enviroments/enviroment';

const LAT_SLZ = '-2.52';
const LON_SLZ = '-44.29';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  readonly url = 'https://api.weatherapi.com';
  readonly apiVersion = 'v1';

  constructor(private httpClient: HttpClient) {}

  public getForecast(position: Location | undefined): Observable<Hour[]> {
    const latitude = position?.latitude
      ? position.latitude.toString()
      : LAT_SLZ;
    const longitude = position?.longitude
      ? position.longitude.toString()
      : LON_SLZ;

    return this.httpClient
      .get<WeatherApiForecast>(
        `${this.url}/${this.apiVersion}/forecast.json?q=${latitude},${longitude}&days=1&lang=pt&key=${enviroment.key}`
      )
      .pipe(map((forecast) => forecast.forecast.forecastday[0].hour));
  }

  public getOthersWeatherInfo(position: Location | undefined): Observable<any> {
    const latitude = position?.latitude
      ? position.latitude.toString()
      : LAT_SLZ;
    const longitude = position?.longitude
      ? position.longitude.toString()
      : LON_SLZ;

    return this.httpClient
      .get<WeatherApiForecast>(
        `${this.url}/${this.apiVersion}/forecast.json?q=${latitude},${longitude}&days=1&lang=pt&key=${enviroment.key}`
      )
      .pipe(
        map((info) => [
          {
            uv: info.current.uv,
            wind: info.current.wind_kph,
            humidity: info.current.humidity,
            visibility: info.current.vis_km,
            feelsLike: info.current.feelslike_c,
            chanceOfRain: info.forecast.forecastday[0].day.daily_chance_of_rain,
            pressure: info.current.pressure_mb,
            sunset: info.forecast.forecastday[0].astro.sunset,
          },
        ])
      );
  }
}
