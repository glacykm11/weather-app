import { Component } from '@angular/core';

@Component({
  selector: 'app-shield',
  templateUrl: './shield.component.html',
  styleUrls: ['./shield.component.scss']
})
export class ShieldComponent {
  public counter: number = 0;

  public aumentar(): number {
    return this.counter++;
  }

  public reduzir(): number {
    return this.counter--;
  }

  public alterarPreenchimentoEscudo(): string {
    return `clip-path: inset(${this.counter.toString()}% 0 0 0)`;
  }
}
