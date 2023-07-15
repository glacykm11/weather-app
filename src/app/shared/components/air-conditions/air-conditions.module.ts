import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirConditionsComponent } from './air-conditions.component';

@NgModule({
  declarations: [AirConditionsComponent],
  imports: [
    CommonModule
  ],
  exports: [AirConditionsComponent]
})
export class AirConditionsModule { }
