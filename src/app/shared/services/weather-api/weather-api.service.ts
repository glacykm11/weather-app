import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApiForecast } from '../../interfaces/weather-api-forecast.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  readonly url = "https://api.weatherapi.com";
  readonly apiVersion = "v1";

  constructor(private httpClient: HttpClient) { }

  public getForecast(): Observable<WeatherApiForecast> {
    return this.httpClient.get<WeatherApiForecast>(`${this.url}/${this.apiVersion}/forecast.json?q=-2.52%2C-44.29&days=1&lang=pt&key=64576215be654caba6c25326231107`);
  }
}
