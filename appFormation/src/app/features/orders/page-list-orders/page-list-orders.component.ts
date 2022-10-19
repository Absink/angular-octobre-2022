import { Component, OnInit } from '@angular/core';
import { faDeleteLeft, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
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
  public ordersV2!: Observable<Order[]>;
  public tabHeaders: string[] = ['ID', 'Client', 'TJM', 'Jours', 'TVA', 'Total HT', 'Total TTC', 'Etat', 'Actions'];
  // public btnRoute: BtnI = { label: "Detail order1", route:'1' };
  // public btnHref: BtnI = { label: "Go google", href: 'http://www.google.fr' };
  // public btnAction: BtnI = { label: "show popup", action: true};
  public btnAdd: BtnI = { label: "Add", route: 'add' };
  public states = Object.values(StateOrder);

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    // this.orderService.collection.subscribe(datas => this.orders = datas);
    this.orderService.getAll().subscribe(datas => this.orders = datas);
    this.ordersV2 = this.orderService.collection;
  }

  public openPopup(): void {
    console.log("test !");
  }

  public getButton(id: number, choice: number): BtnI | null {
    switch(choice) {
      case 1: return { label: "View", route: `view/${id.toString()}`, icon: faEye };
      case 2: return { label: "Edit", route: `edit/${id.toString()}`, icon: faEdit };
      case 3: return { label: "Delete", action: true, icon: faTrash };
    }
    return null;
  }

  public changeState(order: Order, event: any) {
    this.orderService.updateState(order, event.target.value)
      .subscribe(data => order.state = data.state);
  }

  public remove(id: number): void {
    this.orderService.delete(id).subscribe( () => this.orders = this.orders.filter(o => o.id != id));
  }

}
