import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {
  pageTitle: string = '';
  formData: any = {};
  isNewClient: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const clientId = params.get('id');
      if (clientId !== null) {
        this.isNewClient = false;
        this.clientsService.getClientById(clientId).subscribe(client => {
          this.formData = client;
        });
      } else {
        this.isNewClient = true;
        this.formData = {};
      }
    });
  }

  onSubmit(): void {
    if (this.isNewClient) {
      this.clientsService.addClient(this.formData).subscribe(() => {
        this.formData = {};
        this.router.navigate(['/clients']);
      });
    } else {
      this.clientsService.updateClient(this.formData).subscribe(() => {
        this.formData = {};
        this.router.navigate(['/clients']);
      });
    }
  }
}
