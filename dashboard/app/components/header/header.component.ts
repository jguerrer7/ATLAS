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
    selector: 'header',
    templateUrl: 'header.component.html',
    providers: [VehicleService],
})

export class HeaderComponent implements OnInit {
    customers: Customer[] = [];
    fleet: Fleet[];

    constructor(
        private _service: VehicleService,
        private _location: Location,
        private _route: ActivatedRoute
    ) { }

    private id: string = '1';

    ngOnInit(): void {
        this._service.getCustomer(this.id)
            .subscribe(customers => {
                this.customers = customers;
            })
        
}


}
