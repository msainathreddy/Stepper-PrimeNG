import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketserviceService } from '../../services/ticketservice.service';


@Component({
  selector: 'app-payment-demo',
  templateUrl: './payment-demo.component.html',
  styleUrls: ['./payment-demo.component.css']
})
export class PaymentDemoComponent implements OnInit {

  paymentInformation: any;
  submitted: boolean = false;

  constructor(public ticketService: TicketserviceService, private router: Router) { }

  ngOnInit() { 
      this.paymentInformation = this.ticketService.ticketInformation.paymentInformation;
  }

  nextPage() {
      if (this.paymentInformation.cardholderName && this.paymentInformation.cardholderNumber && this.paymentInformation.date && this.paymentInformation.cvv) {
          this.ticketService.ticketInformation.paymentInformation = this.paymentInformation;
          this.router.navigate(['confirmation']);
      }
      this.submitted = true;
  }

  prevPage() {
      this.router.navigate(['address']);
  }
}