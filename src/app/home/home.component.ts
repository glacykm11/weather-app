import { Component, OnInit } from '@angular/core';
import { WheatherMapService } from '../shared/services/wheather-map/wheather-map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wheather!: any;
  main!: any;
  description!: any;

  constructor(private wheatherMapService: WheatherMapService) { }

  ngOnInit() {
    this.wheatherMapService.getWheatherSlz().subscribe((res) => {
      this.wheather = res;
      const [wheather] = this.wheather.weather;
      const { main, description } = wheather;
      this.main = main;
      this.description = description;
    })
  }
}