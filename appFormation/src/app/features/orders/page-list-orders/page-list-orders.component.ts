import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { StateOrder } from 'src/app/shared/enums/state-order';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public orders: Order[] = [];
  public tabHeaders: string[] = ['ID', 'TJM', 'Jours', 'TVA', 'Total HT', 'Total TTC', 'Etat', 'Actions'];
  // public btnRoute: BtnI = { label: "Detail order1", route:'1' };
  // public btnHref: BtnI = { label: "Go google", href: 'http://www.google.fr' };
  // public btnAction: BtnI = { label: "show popup", action: true};
  public btnAdd: BtnI = { label: "Add", route: 'add' };
  public states = Object.values(StateOrder);

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    // this.orderService.collection.subscribe(datas => this.orders = datas);
    this.orderService.getAll().subscribe(datas => this.orders = datas);
  }

  public openPopup(): void {
    console.log("test !");
  }

  public getButton(id: number): BtnI {
    return { label: "View", route: `view/${id.toString()}`, icon: faEye };
  }

  public changeState(order: Order, event: any) {
    this.orderService.updateState(order, event.target.value)
      .subscribe(data => order.state = data.state);
  }

}
