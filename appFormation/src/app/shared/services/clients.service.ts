import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateClient } from '../enums/state-client';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection!: Observable<Client[]>;
  private url = environment.api;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.url}clients`).pipe(
      map(datas => datas.map(obj => new Client(obj)))
    );
   }

   get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  public getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}clients/${id}`).pipe(
      map(datas => new Client(datas))
    );
  }

  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}clients/${client.id}`, client).pipe(
      map(datas => new Client(datas))
    );
  }

  public updateState(client: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...client});
    obj.state = state;
    return this.update(obj);
  }

}
