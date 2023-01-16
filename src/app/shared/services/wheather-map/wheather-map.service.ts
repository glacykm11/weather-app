import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/enviroments/enviroment';

const LAT_SLZ = "-2.52";
const LON_SLZ = "-44.29";

@Injectable({
  providedIn: 'root'
})
export class WheatherMapService {

  private url = "https://api.openweathermap.org/data/2.5";

  constructor(private httpClient: HttpClient) { }

  getWheatherSlz() {
    return this.httpClient.get(`${this.url}/weather?lat=${LAT_SLZ}&lon=${LON_SLZ}&appid=${enviroment.appid}&lang=pt_br`);
  }
}
