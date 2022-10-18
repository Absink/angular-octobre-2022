import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection!: Observable<Order[]>;
  private url = environment.api;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.url}orders`).pipe(
      map(datas => datas.map(objJSON => new Order(objJSON)))
    );
   }

  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }

  public getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}orders`).pipe(
      map(datas => datas.map(objJSON => new Order(objJSON)))
    );
  }

  public getById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.url}orders/${orderId}`).pipe(
      map(datas => new Order(datas))
    );
  }

  // public getById2(orderId: number): Observable<Order> {
  //   return this.http.get<Order>(`${this.url}orders?id=${orderId}`).pipe(
  //     map(datas => new Order(datas))
  //   );
  // }
}
