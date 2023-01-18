import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWheatherComponent } from './card-wheather.component';
import { KelvinToCelsiusModule } from '../../pipes/kelvin-to-celsius/kelvin-to-celsius.module';



@NgModule({
  declarations: [
    CardWheatherComponent
  ],
  imports: [
    CommonModule,
    KelvinToCelsiusModule
  ],
  exports: [CardWheatherComponent]
})
export class CardWheatherModule { }
