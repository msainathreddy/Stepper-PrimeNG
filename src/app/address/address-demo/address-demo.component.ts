import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketserviceService } from '../../services/ticketservice.service';
import { States, county } from '../../models/Department.model';


@Component({
    selector: 'app-address-demo',
    templateUrl: './address-demo.component.html',
    styleUrls: ['./address-demo.component.css']
})
export class AddressDemoComponent implements OnInit {
    countyes: county[] = [];

    constructor(public ticketService: TicketserviceService, private router: Router) { }

    classes: any[];

    vagons: any[];

    seats: any[];

    states: States[] = [];

    seatInformation: any;

    ngOnInit() {
        this.seatInformation = this.ticketService.ticketInformation.seatInformation;

        this.classes = [
            { name: 'Residence Address' },
            { name: 'Business Address' },
            { name: 'Mailing Address' }
        ];

        this.states = [
            { id: 1, name: 'New York' },
            { id: 2, name: 'New Jersey' },
            { id: 3, name: 'India' },
            { id: 4, name: 'New Zealand' }
        ];
        this.countyes = [
            { id: 1, name: 'ALBANY' },
            { id: 2, name: 'BRONX' },
            { id: 3, name: 'FULTON' },
            { id: 4, name: 'ERIE' }
        ];
    }

    //   setVagons(event) {
    //       if (this.seatInformation.class && event.value) {
    //           this.vagons = [];
    //           this.seats = [];
    //           for (let i = 1; i < 3 * event.value.factor; i++) {
    //               this.vagons.push({wagon: i + event.value.code, type: event.value.name, factor: event.value.factor});
    //           }
    //       }
    //   }

    //   setSeats(event) {
    //       if (this.seatInformation.wagon && event.value) {
    //           this.seats = [];
    //           for (let i = 1; i < 10 * event.value.factor; i++) {
    //               this.seats.push({seat: i, type: event.value.type});
    //           }
    //       }
    //   }

    nextPage() {
        if (this.seatInformation.class && this.seatInformation.state && this.seatInformation.county) {
            this.ticketService.ticketInformation.seatInformation = this.seatInformation;
            this.router.navigate(['payment']);
        }
    }

    prevPage() {
        this.router.navigate(['personal']);
    }
}