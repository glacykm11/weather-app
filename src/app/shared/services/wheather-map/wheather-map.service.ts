import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';
import { WeatherInfo } from '../../interfaces/weather-info.interface';

const LAT_SLZ = "-2.52";
const LON_SLZ = "-44.29";

@Injectable({
  providedIn: 'root'
})
export class WheatherMapService {

  readonly url = "https://api.openweathermap.org/data/2.5";

  constructor(private httpClient: HttpClient) { }

  getWheatherSlz(): Observable<WeatherInfo> {
    return this.httpClient.get<WeatherInfo>(`${this.url}/weather?lat=${LAT_SLZ}&lon=${LON_SLZ}&appid=${enviroment.appid}&lang=pt_br`);
  }
}
