import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import {
  WeatherInfo,
  WeatherInitialInfo,
} from '../../interfaces/weather-info.interface';
import { Location } from '../../interfaces/location.interface';

const LAT_SLZ = '-2.52';
const LON_SLZ = '-44.29';

@Injectable({
  providedIn: 'root',
})
export class WeatherMapService {
  readonly url = 'https://api.weatherapi.com/v1/current.json?';

  constructor(private httpClient: HttpClient) {}

  getWheatherCity(position?: Location): Observable<WeatherInitialInfo[]> {
    const latitude = position?.latitude
      ? position.latitude.toString()
      : LAT_SLZ;
    const longitude = position?.longitude
      ? position.longitude.toString()
      : LON_SLZ;

    return this.httpClient
      .get<WeatherInfo>(
        `${this.url}q=${latitude},${longitude}&lang=pt&key=${enviroment.key}`
      )
      .pipe(
        map((item: any) => [
          {
            temperature: item.current.temp_c,
            description: item.current.condition.text,
            city: item.location.name,
            icon: item.current.condition.icon,
          },
        ])
      );
  }
}
