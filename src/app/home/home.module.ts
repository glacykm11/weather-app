import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { KelvinToCelsiusModule } from '../shared/pipes/kelvin-to-celsius/kelvin-to-celsius.module';
import { CardWheatherModule } from '../shared/components/card-weather/card-weather.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    KelvinToCelsiusModule,
    CardWheatherModule
  ]
})
export class HomeModule { }
