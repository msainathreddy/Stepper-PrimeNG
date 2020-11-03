import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { PersonalDemoComponent } from './personal/personal-demo/personal-demo.component';
import { AddressDemoComponent } from './address/address-demo/address-demo.component';
import { PaymentDemoComponent } from './payment/payment-demo/payment-demo.component';
import { ConfirmationDemoComponent } from './confirmation/confirmation-demo/confirmation-demo.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDemoComponent,
    AddressDemoComponent,
    PaymentDemoComponent,
    ConfirmationDemoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    ToastModule,
    FormsModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
