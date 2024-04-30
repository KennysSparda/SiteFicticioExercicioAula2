import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-details',
  templateUrl: './clients-details.component.html',
  styleUrls: ['./clients-details.component.css']
})
export class ClientsDetailsComponent implements OnInit {
  client: any;

  constructor(private route: ActivatedRoute, private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const clientId = params.get('id');
      if (clientId !== null) {
        this.clientsService.getClientById(clientId).subscribe(client => {
          this.client = client;
        });
      }
    });
  }
}
