import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

//services
import { ApiOlimpoService } from './service/api-olimpo.service';
import { FilterPipe } from './pipes/filter.pipe';
import { CarritoComponent } from './component/carrito/carrito.component';
import { PoliciesAndPrivacyComponent } from './component/policies-and-privacy/policies-and-privacy.component';
import { EventsComponent } from './component/events/events.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ChatComponent } from './component/chat/chat.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { InformacionComponent } from './component/informacion/informacion.component';
import { SobreNosotrosComponent } from './component/sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LandingPageComponent,
    FilterPipe,
    CarritoComponent,
    PoliciesAndPrivacyComponent,
    EventsComponent,
    OrdersComponent,
    ChatComponent,
    ShoppingListComponent,
    InformacionComponent,
    SobreNosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiOlimpoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
