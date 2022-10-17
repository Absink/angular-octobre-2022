import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI {
  id: number | undefined;
  ca: number = 0;
  tva: number = 20;
  state: StateClient = StateClient.Inactive;
  name: string | undefined;
  comment: string | undefined;

  constructor(obj?: Partial<Client>) {
    if (obj) Object.assign(this, obj);
  }
}

