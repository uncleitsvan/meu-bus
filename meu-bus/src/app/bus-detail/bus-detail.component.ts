import { Component, OnInit, Input } from '@angular/core';
import {Bus} from "../bus";

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.css']
})
export class BusDetailComponent implements OnInit {

  @Input() bus: Bus;

  constructor() { }

  ngOnInit() {
  }

}
