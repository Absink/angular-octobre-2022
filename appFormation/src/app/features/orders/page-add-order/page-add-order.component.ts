import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  public order!: Order;
  public error!: string
  public loadingFinished: boolean = false;
  public idOrder!: number;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.idOrder = Number(this.route.snapshot.paramMap.get('id'))
      this.ordersService.getById(this.idOrder)
        .subscribe(data => {
          this.order = data;
          this.loadingFinished = true;
         }
        );
    } else
      this.loadingFinished = true;
  }

  public add(order: Order): void {
    if (!order)
      this.ordersService.add(order).subscribe(datas => {
        if (datas.id)
          this.router.navigateByUrl('/orders');
      });
    else {
      order.id = this.idOrder;
      this.ordersService.update(order).subscribe(datas => {
        if (datas.id)
          this.router.navigateByUrl('/orders');
      });
    }

  }

}
