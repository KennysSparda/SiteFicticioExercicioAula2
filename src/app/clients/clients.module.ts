import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from '@angular/common/http';

import { ClientsComponent } from "./clients.component";
import { ClientsFormComponent } from "./clients-form/clients-form.component";
import { ClientsDetailsComponent } from "./clients-details/clients-details.component";
import { ClientsRoutingModule } from "./clients.routing.module";
import { ClientsService } from './clients.service';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        ClientsRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        ClientsComponent, 
        ClientsFormComponent, 
        ClientsDetailsComponent
    ],
    declarations: [
        ClientsComponent, 
        ClientsFormComponent, 
        ClientsDetailsComponent
    ],
    providers: [ClientsService],
})

export class ClientsModule { }