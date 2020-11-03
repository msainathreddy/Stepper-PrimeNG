import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketserviceService } from '../../services/ticketservice.service';


@Component({
  selector: 'app-confirmation-demo',
  templateUrl: './confirmation-demo.component.html',
  styleUrls: ['./confirmation-demo.component.css']
})
export class ConfirmationDemoComponent implements OnInit {

  ticketInformation: any;
    
  constructor(public ticketService: TicketserviceService, private router: Router) { }

  ngOnInit() { 
      this.ticketInformation = this.ticketService.ticketInformation;
  }

  complete() {
      this.ticketService.complete();
  }

  prevPage() {
      this.router.navigate(['payment']);
  }
}