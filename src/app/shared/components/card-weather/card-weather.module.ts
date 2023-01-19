import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWeatherComponent } from './card-weather.component';
import { KelvinToCelsiusModule } from '../../pipes/kelvin-to-celsius/kelvin-to-celsius.module';

@NgModule({
  declarations: [
    CardWeatherComponent
  ],
  imports: [
    CommonModule,
    KelvinToCelsiusModule
  ],
  exports: [CardWeatherComponent]
})
export class CardWheatherModule { }
