import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {

    const tempoList: any = {
      'Sun': 'Sol',
      'Rain': 'Chuva',
      'Thunderstorm': 'Trovoada'
    }
    return tempoList[value] || tempoList['Sun'];
  }

}
