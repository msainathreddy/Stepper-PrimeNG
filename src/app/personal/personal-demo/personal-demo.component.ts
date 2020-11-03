import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketserviceService } from '../../services/ticketservice.service';


@Component({
  selector: 'app-personal-demo',
  templateUrl: './personal-demo.component.html',
  styleUrls: ['./personal-demo.component.css']
})
export class PersonalDemoComponent implements OnInit {

  personalInformation: any;

  submitted: boolean = false;

  constructor(public ticketService: TicketserviceService, private router: Router) { }

    ngOnInit() { 
        this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
    }

    nextPage() {
        if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
            this.ticketService.ticketInformation.personalInformation = this.personalInformation;
            this.router.navigate(['address']);

            return;
        }

        this.submitted = true;
    }
}