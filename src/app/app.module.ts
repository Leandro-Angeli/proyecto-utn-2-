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
import { PromoMainComponent } from './components/promo-main/promo-main.component';
import { PromosComponent } from './components/promos/promos.component';
import { NosotrosHeaderComponent } from './components/nosotros-header/nosotros-header.component';
import { NosotrosMainComponent } from './components/nosotros-main/nosotros-main.component';
import { NosotrosTestimonialComponent } from './components/nosotros-testimonial/nosotros-testimonial.component';
import { NosotrosSocialMediaComponent } from './components/nosotros-social-media/nosotros-social-media.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwiperModule } from 'swiper/angular';

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
    PromoHeaderComponent,
    PromoMainComponent,
    PromosComponent,
    NosotrosHeaderComponent,
    NosotrosMainComponent,
    NosotrosTestimonialComponent,
    NosotrosSocialMediaComponent,
    SliderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
