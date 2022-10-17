import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.collection.subscribe(datas => this.clients = datas);
  }
}
