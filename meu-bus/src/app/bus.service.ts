import {Injectable} from '@angular/core';
import {Bus} from "./bus";
import {BUSES} from "./mock/mock-bus";

@Injectable()
export class BusService {

  constructor() {
  }

  getBuses(): Bus[] {
    return BUSES;
  }

}
