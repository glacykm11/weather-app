import { Component, Input } from '@angular/core';
import { OtherWeatherInfo } from '../../interfaces/weather-info.interface';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() value!: string;
}
