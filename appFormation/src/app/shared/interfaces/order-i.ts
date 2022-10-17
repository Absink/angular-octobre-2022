import { StateOrder } from "../enums/state-order";

export interface OrderI {
  id: number | undefined;
  tjmHT: number;
  nbJours: number;
  tva: number;
  state: StateOrder;
  typePresta: string | undefined;
  client: string | undefined;
  comment: string | undefined;

  totalHT(): number;
  totalTTC(): number;
}
