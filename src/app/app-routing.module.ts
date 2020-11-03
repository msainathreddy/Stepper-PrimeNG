import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressDemoComponent } from './address/address-demo/address-demo.component';
import { ConfirmationDemoComponent } from './confirmation/confirmation-demo/confirmation-demo.component';
import { PaymentDemoComponent } from './payment/payment-demo/payment-demo.component';
import { PersonalDemoComponent } from './personal/personal-demo/personal-demo.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path:'',component: AppComponent, children:[
    {path:'', redirectTo: 'personal', pathMatch: 'full'},
    {path: 'personal', component: PersonalDemoComponent},
    {path: 'confirmation', component: ConfirmationDemoComponent},
    {path: 'address', component: AddressDemoComponent},
    {path: 'payment', component: PaymentDemoComponent}

  //]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponents =[
  PersonalDemoComponent,
  PaymentDemoComponent,
  ConfirmationDemoComponent,
  AddressDemoComponent,
  AppComponent
]
