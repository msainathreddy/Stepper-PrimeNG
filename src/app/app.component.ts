import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TicketserviceService } from './services/ticketservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   styles: [`
//   .p-state-complete .p-steps-number{
//     background-color: green !important;
// }
//     `],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]

})
export class AppComponent {
  items: MenuItem[];

  activeIndex: number = 1;
  subscription: any;

  constructor(private messageService: MessageService, public ticketService: TicketserviceService) { }

  ngOnInit() {
    this.items = [{
      label: 'Personal',
      routerLink: 'personal',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
    {
      label: 'Address',
      routerLink: 'address',
      command: (event: any) => {
        this.activeIndex = 1;
      }
    },
    {
      label: 'Payment',
      routerLink: 'payment',
      command: (event: any) => {
        this.activeIndex = 2;
      }
    },
    {
      label: 'Confirmation',
      routerLink: 'confirmation',
      command: (event: any) => {
        this.activeIndex = 3;
      }
    }
    ];

    this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) => {
      this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.' });
    });
  }

}
