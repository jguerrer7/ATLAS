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
    providers: [ VehicleService ],
})

export class FleetStatusComponent implements OnInit {
    customers: Customer;
    vehicles: Vehicle[];
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

                this._service.getCustomer()
                .subscribe(customers => this.customers);
                
            })
        
    }

    goBack(): void {
        this._location.back();
    }

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['1/2/17', '1/9/17', '1/16/17', '1/23/17', '1/30/17', '2/6/17', '2/13/17'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Fuel Used' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Idle Fuel Used' }
    ];

    public chartColors: any[] = [
        { // first color
            backgroundColor: 'rgba(0,191,255,0.2)',
            // borderColor: 'rgba(225,10,24,0.2)',
            pointBackgroundColor: 'rgba(225,10,24,0.2)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(225,10,24,0.2)'
        },
        { // second color
            backgroundColor: 'rgba(173,255,47,0.2)',
            // borderColor: 'rgba(225,10,24,0.2)',
            pointBackgroundColor: 'rgba(225,10,24,0.2)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(225,10,24,0.2)'
        }];

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        let data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;

    }


}
