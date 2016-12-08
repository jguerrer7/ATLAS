import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Import class
import { Vehicle } from '../../classes/Vehicle/Vehicle';

// Import service
import { VehicleService } from '../../services/vehicle-service/vehicle-service';

@Component({
    moduleId: module.id,
    selector: 'vehicleOverview',
    templateUrl: 'vehicle-overview.component.html',
    providers: [ VehicleService ]

})

export class VehicleOverviewComponent implements OnInit{ 
    id: string;
    vehicles: Vehicle[];
    
    // Sample spotify constructor
    /*
    constructor(
        private _service:Service,
        private _route:ActivatedRoute){

    } */
    
    // Define service via constructor instead of initializing each component load 
    constructor( 
        private _vehicleService: VehicleService,
        private _route:ActivatedRoute
    ){ }

    getVehicles(): void {
        this.vehicles = this._vehicleService.getVehicles();
    }

    ngOnInit(): void {
        this.getVehicles();

    }
    // Sample data mapping from API
    /*
    ngOnInit(){
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._service.getArtist(id)
                .subscribe(artist => {
                    this.artist = artist;
                })

                this._service.getAlbums(id)
                .subscribe(albums => {
                    this.albums = albums.items;
                })
            })

    }
    */
}
