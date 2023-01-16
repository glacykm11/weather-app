import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(value: number): number {
    let grausEmCelsius: number;

    grausEmCelsius = value - 273.15;

    let grausEmCelsiusSemCasaDecimal = Number(grausEmCelsius.toFixed(0));

    return grausEmCelsiusSemCasaDecimal;
  }

}
