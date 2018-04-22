import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BusesComponent} from "./buses/buses.component";
import {AppMenuComponent} from "./app-menu/app-menu.component";

const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'buses', component: BusesComponent},
  {path: 'menu', component: AppMenuComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
