import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShieldComponent } from './shield.component';

const routes: Routes = [
  { path: "", component: ShieldComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShieldRoutingModule { }
