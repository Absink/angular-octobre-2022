import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  @Input() listDatas!: Order[];
  @Input() headers!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
