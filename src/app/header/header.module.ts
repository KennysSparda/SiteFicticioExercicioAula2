import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";

import { HeaderComponent } from "./header.component";


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
})

export class HeaderModule { }