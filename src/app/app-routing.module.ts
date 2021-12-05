import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from "./component/landing-page/landing-page.component";
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from "./component/home/home.component";
import { CarritoComponent } from './component/carrito/carrito.component';
import { PoliciesAndPrivacyComponent } from './component/policies-and-privacy/policies-and-privacy.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ChatComponent } from './component/chat/chat.component';
import { EventsComponent } from './component/events/events.component';

const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "signIn", component:LoginComponent},
  {path: "signUp", component:RegisterComponent},
  {path: "home", component:HomeComponent},
  {path: "events", component:EventsComponent},
  {path: "orders", component:OrdersComponent},
  {path: "chat", component:ChatComponent},
  {path: "carrito", component:CarritoComponent},
  {path: "policies-and-privacy", component:PoliciesAndPrivacyComponent},
  {path: "**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
