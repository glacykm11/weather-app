import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { KelvinToCelsiusModule } from '../shared/pipes/kelvin-to-celsius/kelvin-to-celsius.module';
import { CardWheatherModule } from '../shared/components/card-weather/card-weather.module';
import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { TodayForecastModule } from '../shared/components/today-forecast/today-forecast.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    KelvinToCelsiusModule,
    CardWheatherModule,
    NavbarModule,
    TodayForecastModule
  ]
})
export class HomeModule { }
