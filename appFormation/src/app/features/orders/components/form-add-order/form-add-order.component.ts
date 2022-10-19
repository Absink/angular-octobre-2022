import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { Order } from 'src/app/shared/models/order.model';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-form-add-order',
  templateUrl: './form-add-order.component.html',
  styleUrls: ['./form-add-order.component.scss']
})
export class FormAddOrderComponent implements OnInit {

  @Input() order = new Order();
  @Output() clicked: EventEmitter<Order> = new EventEmitter();

  public states = Object.values(StateOrder);
  public form!: FormGroup;
  public btnSave: BtnI = { label: "Add", action: true };
  public clients: Client[] = [];

  constructor(private formBuilder: FormBuilder, private clientsServices: ClientsService) { }

  ngOnInit(): void {
    if (this.order) this.btnSave.label = "Save";

    this.clientsServices.collection.subscribe(datas => this.clients = datas);

    this.form = this.formBuilder.group({
      typePresta: [this.order.typePresta, Validators.required],
      client: [this.order.client, Validators.compose([Validators.required, Validators.minLength(5)])],
      clientId: [this.order.clientId],
      nbJours: [this.order.nbJours],
      tjmHT: [this.order.tjmHT],
      tva: [this.order.tva],
      state: [this.order.state],
      comment: [this.order.comment],
    });
  }

  public save(): void {
    this.clicked.emit(this.form.value);
  }

}
