import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

// Import vehicle service
import { VehicleService } from '../../services/vehicle-service/vehicle-service';

//Import classes
import { Customer } from '../../classes/Customer/Customer';
import { Vehicle } from '../../classes/Vehicle/Vehicle';
import { Fleet } from '../../classes/Fleet/Fleet';

@Component({
    moduleId: module.id,
    selector: 'fleetStatus',
    templateUrl: 'fleet-status.component.html',
    styleUrls: ['fleet-status.component.css'],
    providers: [ VehicleService ],
})

export class FleetStatusComponent implements OnInit {
    customers: Customer;
    fleet: Fleet[];

    constructor(
        private _service: VehicleService,
        private _location: Location,
        private _route: ActivatedRoute
    ) { }

    ngOnInit(): void {

        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._service.searchFleet(id)
                .subscribe(fleet => {
                    this.fleet = fleet;
                })
            })
        
    }

    goBack(): void {
        this._location.back();
    }

}
