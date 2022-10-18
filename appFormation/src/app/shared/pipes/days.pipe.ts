import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {

  transform(nbDay: number): string | null {
    if (nbDay) {
      if (nbDay > 1)
        return `${nbDay} jours`;
      return `${nbDay} jour`;
    }
    return null;
  }

}
