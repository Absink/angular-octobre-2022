import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(order: Order, ...args: unknown[]): number | null {
    if (order) {
      if(args[0] === 'TTC')
        return order.totalTTC();
      return order.totalHT();
    }
    return null;
  }

}
