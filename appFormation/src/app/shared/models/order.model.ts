import { StateOrder } from "../enums/state-order";
import { OrderI } from "../interfaces/order-i";

export class Order implements OrderI {
  id: number | undefined = undefined;
  tjmHT: number = 500;
  nbJours: number = 1;
  tva: number = 20;
  state: StateOrder = StateOrder.OPTION;
  typePresta: string | undefined;
  client: string | undefined;
  comment: string | undefined;

  totalHT(): number {
    return this.tjmHT*this.nbJours;
  }

  totalTTC(): number {
    return this.totalHT() * (1 + this.tva/100);
  }

  constructor(obj?: Partial<Order>) {
    if (obj) Object.assign(this, obj);
  }
}
