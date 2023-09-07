import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  cities = new FormControl('');

  constructor(private router: Router) {}

  ngOnInit() {}

  public navigateToCitiesPage(): void {
    this.router.navigate(['/cities']);
  }
}
