import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShieldRoutingModule } from './shield-routing.module';
import { ShieldComponent } from './shield.component';


@NgModule({
  declarations: [
    ShieldComponent
  ],
  imports: [
    CommonModule,
    ShieldRoutingModule
  ]
})
export class ShieldModule { }
