import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public error!: string

  constructor(private ordersService: OrdersService, private router: Router) { }

  ngOnInit(): void {
  }

  public add(order: Order): void {
    this.ordersService.add(order).subscribe(datas => {
      console.log(datas);
      if (datas.id)
        this.router.navigateByUrl('/orders');
    });
  }

}
