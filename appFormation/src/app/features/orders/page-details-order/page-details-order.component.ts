import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-page-details-order',
  templateUrl: './page-details-order.component.html',
  styleUrls: ['./page-details-order.component.scss']
})
export class PageDetailsOrderComponent implements OnInit {

  public order!: Order;

  constructor(
    private route: ActivatedRoute,
    private ordersServices: OrdersService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ordersServices.getById(id).subscribe(data => this.order = data);
  }

}
