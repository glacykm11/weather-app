import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WheatherMapService } from '../services/wheather-map/wheather-map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wheatherInfo$!: Observable<any>;

  constructor(private wheatherMapService: WheatherMapService) { }

  ngOnInit() {
    this.wheatherInfo$ = this.wheatherMapService.getWheatherSlz();
  }
}