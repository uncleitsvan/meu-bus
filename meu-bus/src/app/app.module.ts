import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { BusesComponent } from './buses/buses.component';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import {BusService} from "./bus.service";
import { AppRoutingModule } from './/app-routing.module';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BusesComponent,
    BusDetailComponent,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    BusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
