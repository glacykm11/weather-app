import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss']
})
export class CardWeatherComponent {
  @Input() cidade!: string;
  @Input() descricao!: string;
  @Input() sensacaoTermica!: number;
  @Input() temperatura!: number;
  @Input() tempo!: string;

  alterarIcone(tempo: string): string {
    const tempoList: any = {
      'Sun': '../../../../assets/images/sun.png',
      'Rain': '../../../../assets/images/raining.png',
      'Thunderstorm': '../../../../assets/images/storm.png'
    }
    return tempoList[tempo] || tempoList['Sun'];
  }
}


