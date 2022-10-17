import { StateClient } from "../enums/state-client";

export interface ClientI {
  id: number | undefined;
  ca: number;
  tva: number;
  state: StateClient;
  name: string | undefined;
  comment: string | undefined;

}
