import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

// Import service
import { VehicleService } from '../../services/vehicle-service/vehicle-service';

//Import class
import { Vehicle } from '../../classes/Vehicle/Vehicle';

@Component({
    moduleId: module.id,
    selector: 'vehicleOverview',
    templateUrl: 'vehicle-overview.component.html',
    styleUrls: ['vehicle-overview.component.css'],
    providers: [VehicleService]

})

export class VehicleOverviewComponent implements OnInit {
    vehicles: Vehicle[];

    // Define service via constructor instead of initializing each component load 
    constructor(
        private _service: VehicleService,
        private _route: ActivatedRoute,
        private _location: Location
    ) { }

    ngOnInit(): void {

        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._service.getVehicle(id)
                    .subscribe(vehicles => {
                        this.vehicles = vehicles;
                    })
            })
    }

    goBack(): void {
        this._location.back();
    }

}
