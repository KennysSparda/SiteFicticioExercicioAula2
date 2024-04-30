import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ClientsComponent } from "./clients.component";
import { ClientsDetailsComponent } from "./clients-details/clients-details.component";
import { ClientsFormComponent } from "./clients-form/clients-form.component";

const clientsRoutes = [
    {
        path: 'clients',
        component: ClientsComponent,
        children: [
            { path: 'new', component: ClientsFormComponent, data: { title: 'Novo Cliente', isNew: true } },
            { path: ':id', component: ClientsDetailsComponent },
            { path: ':id/edit', component: ClientsFormComponent, data: { title: 'Editar Cliente', isNew: false } },
        ]
    },
];

@NgModule ({
    imports: [RouterModule.forChild(clientsRoutes)],
    exports: [RouterModule]
})

export class ClientsRoutingModule {}