import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public orders: Order[] = [];
  public tabHeaders: string[] = ['ID', 'TJM', 'Jours', 'TVA', 'Total HT', 'Total TTC', 'Etat'];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    // this.orderService.collection.subscribe(datas => this.orders = datas);
    this.orderService.getAll().subscribe(datas => this.orders = datas);
  }

}
