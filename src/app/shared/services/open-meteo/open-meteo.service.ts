import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherForecast } from '../../interfaces/weather-forecast.interface';

const LAT_SLZ = "-2.5297";
const LON_SLZ = "-44.3028";

@Injectable({
  providedIn: 'root'
})
export class OpenMeteoService {

  readonly url = "https://api.open-meteo.com";

  constructor(private httpClient: HttpClient) { }

  getWheatherForecastSlz(): Observable<WeatherForecast> {
    return this.httpClient.get<WeatherForecast>(`${this.url}/v1/forecast?latitude=${LAT_SLZ}&longitude=${LON_SLZ}&hourly=temperature_2m,windspeed_10m&daily=uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1`);
  }
}
