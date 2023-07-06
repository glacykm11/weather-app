import { Component, OnInit } from '@angular/core';
import { WheatherMapService } from '../shared/services/wheather-map/wheather-map.service';
import { OpenMeteoService } from '../shared/services/open-meteo/open-meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  wheather!: any;
  main!: any;
  description!: any;

  constructor(private wheatherMapService: WheatherMapService, private openMeteoService: OpenMeteoService) { }

  ngOnInit() {
    this.getWheatherSlz();
    //this.getSlzWeatherForecast();
  }

  private getWheatherSlz() {
    this.wheatherMapService.getWheatherSlz().subscribe((res) => {
      this.wheather = res;
      const [wheather] = this.wheather.weather;
      const { main, description } = wheather;
      this.main = main;
      this.description = description;
    })
  }

  private getSlzWeatherForecast() {
    const x = this.openMeteoService.getWheatherForecastSlz();

    x.subscribe((response) => {
      console.log(response, "olá")
    })
  }
}