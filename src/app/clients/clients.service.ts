import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private clientsUrl = '/assets/clients.json';

  constructor(private http: HttpClient) { }

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.clientsUrl);
  }

  getClientById(id: string): Observable<any> {
    return this.getClients().pipe(
      map(clients => clients.find(client => client.id === parseInt(id)))
    );
  }
  addClient(client: any): Observable<any> {
    return this.getClients().pipe(
      map(clients => {
        client.id = this.generateClientId(clients);
        clients.push(client);
        return clients;
      })
    );
  }

  updateClient(updatedClient: any): Observable<any> {
    return this.getClients().pipe(
      map(clients => {
        const index = clients.findIndex(c => c.id === updatedClient.id);
        if (index !== -1) {
          clients[index] = updatedClient;
        }
        return clients;
      })
    );
  }

  deleteClient(clientId: number): Observable<any> {
    return this.getClients().pipe(
      map(clients => {
        return clients.filter(client => client.id !== clientId);
      })
    );
  }

  private generateClientId(clients: any[]): number {
    let maxId = 0;
    clients.forEach(client => {
      if (client.id > maxId) {
        maxId = client.id;
      }
    });
    return maxId + 1;
  }
}
