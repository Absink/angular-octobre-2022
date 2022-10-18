import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-page-details-client',
  templateUrl: './page-details-client.component.html',
  styleUrls: ['./page-details-client.component.scss']
})
export class PageDetailsClientComponent implements OnInit {

  public client!: Client;

  constructor(
    private route: ActivatedRoute,
    private clientsServices: ClientsService) { }

  ngOnInit(): void {
    this.clientsServices.getById(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe(data => this.client = data);
  }

}
