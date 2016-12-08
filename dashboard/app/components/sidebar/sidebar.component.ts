import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

//Import vehicle service
import { VehicleService } from '../../services/vehicle-service/vehicle-service';

//Import Fleet class
import { Fleet } from '../../classes/Fleet/Fleet';
import { Vehicle } from '../../classes/Vehicle/Vehicle';

@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    providers: [ VehicleService ]
})

export class SidebarComponent implements OnInit {

    fleets: Fleet[] = [];

    constructor(
        private _service: VehicleService,
        private _route: ActivatedRoute) { }
    
    private owner:string = 'DDTS';

    ngOnInit(): void{
        this._route.params
            .map(params => params['owner'])
            .subscribe((owner) => {
                this._service.getFleets(this.owner)
                .subscribe(fleet => {
                    this.fleets = fleet;
                })
                
            })
    }

}