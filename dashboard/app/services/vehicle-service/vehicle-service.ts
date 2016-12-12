import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//Import classes
import { Customer } from '../../classes/Customer/Customer';
import { Vehicle } from '../../classes/Vehicle/vehicle';
import { Fleet } from '../../classes/Fleet/Fleet';

@Injectable()

export class VehicleService {
    private searchFleetUrl: string;
    private searchVehicle: string;
    private getCustomerUrl: string;
    private getFleetsUrl: string;
    private getVehicleUrl: string;

    constructor(private _http:Http){

    }

    getVehicle(str:string) {
        this.getVehicleUrl='http://localhost:3000/vehicles?id='+str;
        return this._http.get(this.getVehicleUrl)
            .map(res => res.json());

    }

    getCustomer(str:string) {
        this.getCustomerUrl='http://localhost:3000/customers?id='+str;
        return this._http.get(this.getCustomerUrl)
            .map(res => res.json());
    }

    getFleets(str:string) {
        this.getFleetsUrl='http://localhost:3000/fleets?owner='+str;
        return this._http.get(this.getFleetsUrl)
            .map(res => res.json());

    }

    searchFleet(str:string) {
        this.searchFleetUrl='http://localhost:3000/vehicles?fleet='+str; // mock server w/ REST API
        return this._http.get(this.searchFleetUrl)
            .map(res => res.json());
    }

}