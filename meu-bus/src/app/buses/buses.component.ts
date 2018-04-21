import {Component, OnInit} from '@angular/core';
import {Bus} from "../bus";
import {BUSES} from "../mock/mock-bus";

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  busList = BUSES;
  selectedBus: Bus;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(bus: Bus) {
    this.selectedBus = bus;
  }

}
