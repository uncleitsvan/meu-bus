import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BusesComponent} from "./buses/buses.component";


const routes: Routes = [
  {path: 'buses', component: BusesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
