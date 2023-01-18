import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-wheather',
  templateUrl: './card-wheather.component.html',
  styleUrls: ['./card-wheather.component.scss']
})
export class CardWheatherComponent {
  @Input() cidade!: string;
  @Input() sensacaoTermica!: number;
  @Input() temperatura!: number;
}
