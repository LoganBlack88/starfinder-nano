import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from './app.component';
import { HomeModule } from "./home/home.module";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
