import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

}
