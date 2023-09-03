import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import {
  WeatherInfo,
  WeatherInitialInfo,
} from '../../interfaces/weather-info.interface';

const LAT_SLZ = '-2.52';
const LON_SLZ = '-44.29';

@Injectable({
  providedIn: 'root',
})
export class WheatherMapService {
  readonly url = 'https://api.openweathermap.org/data/2.5';

  constructor(private httpClient: HttpClient) {}

  getWheatherSlz(): Observable<WeatherInitialInfo[]> {
    return this.httpClient
      .get<WeatherInfo>(
        `${this.url}/weather?lat=${LAT_SLZ}&lon=${LON_SLZ}&appid=${enviroment.appid}&lang=pt_br`
      )
      .pipe(
        map((items: WeatherInfo) => [
          {
            id: items.weather[0].id,
            main: items.weather[0].main,
            description: items.weather[0].description,
            temperature: items.main.temp,
            city: items.name,
          },
        ])
      );
  }
}
