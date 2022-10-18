import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public clients: Client[] = [];
  public displayFilter: boolean = false;

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.collection.subscribe(datas => this.clients = datas);
  }

  public switch(): void {
    this.displayFilter = !this.displayFilter;
    if (this.displayFilter)
      this.clients = this.clients.filter(client => client.state == StateClient.Active);
    else
      this.clientsService.collection.subscribe(datas => this.clients = datas);
  }
}
