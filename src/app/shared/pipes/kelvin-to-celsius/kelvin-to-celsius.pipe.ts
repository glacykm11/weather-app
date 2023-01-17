import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(value: number): number {
    const grausEmCelsius: number = value - 273.15;
    const grausEmCelsiusSemCasaDecimal = Number(grausEmCelsius.toFixed(0));

    return grausEmCelsiusSemCasaDecimal;
  }

}
