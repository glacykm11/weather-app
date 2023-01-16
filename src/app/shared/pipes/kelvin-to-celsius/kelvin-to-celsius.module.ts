import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';

@NgModule({
  declarations: [
    KelvinToCelsiusPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KelvinToCelsiusPipe
  ]
})
export class KelvinToCelsiusModule { }
