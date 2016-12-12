import { Component, OnInit } from '@angular/core';

// Import vehicle service
import { VehicleService } from '../../services/vehicle-service/vehicle-service';

//Import customer class
import { Customer } from '../../classes/Customer/Customer';
import { Vehicle } from '../../classes/Vehicle/Vehicle';
import { Fleet } from '../../classes/Fleet/Fleet';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    providers: [ VehicleService ]
})

export class DashboardComponent implements OnInit { 
    searchStr:string;
    // searchRes: Artist[];

    customer: Customer;
    vehicles: Vehicle[];

    constructor(private _service:VehicleService){

    }

    ngOnInit(): void{
        this._service.getCustomer()
            .subscribe(customer => this.customer);
        
    }

}
