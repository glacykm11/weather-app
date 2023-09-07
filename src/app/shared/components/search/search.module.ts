import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SearchComponent],
})
export class SearchModule {}
