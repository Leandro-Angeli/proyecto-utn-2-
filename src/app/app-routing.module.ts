import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { StaffComponent } from './pages/staff/staff.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'menu',component:MenuComponent},
  {path:'staff',component:StaffComponent},
  {path:'promociones',component:PromocionesComponent},
  {path:'sucursales',component:SucursalesComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'',redirectTo:'/home',pathMatch: 'prefix'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
