import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-air-conditions',
  templateUrl: './air-conditions.component.html',
  styleUrls: ['./air-conditions.component.scss']
})
export class AirConditionsComponent {

  @Output() seeMoreEvent = new EventEmitter<any>();

  public emitClickOnSeeMore() {
    this.seeMoreEvent.emit();
  }
}
