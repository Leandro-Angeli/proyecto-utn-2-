import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { StaffComponent } from './pages/staff/staff.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { MenuHomeComponent } from './components/menu-home/menu-home.component';
import { FormComponent } from './components/form/form.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { PromoHeaderComponent } from './components/promo-header/promo-header.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NosotrosComponent,
    PromocionesComponent,
    HomeHeaderComponent,
    MenuComponent,
    StaffComponent,
    SucursalesComponent,
    ContactoComponent,
    InstitucionalComponent,
    MenuHomeComponent,
    FormComponent,
    CartButtonComponent,
    PromoHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
