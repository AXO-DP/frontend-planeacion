import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { JerarquiasAxoComponent } from './modules/mdm/jerarquias-axo/jerarquias-axo.component';
import { CategoriaDemComponent } from './modules/mdm/categoria-dem/categoria-dem.component';
import { OrganizacionComponent } from './modules/relaciones/organizacion/organizacion.component';
import { GeneroComponent } from './modules/mdm/genero/genero.component';
import { CanalComponent } from './modules/relaciones/canal/canal.component';
import { CentroComponent } from './modules/relaciones/centro/centro.component';
import { JerarquiasAptosComponent } from './modules/mdm/jerarquias-aptos/jerarquias-aptos.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './system/inicio/inicio.component';

const routes: Routes = [
  {path: "login",  component:LoginComponent},
  {path: "inicio", component:InicioComponent, children: [
    {path: "organizacion", component: OrganizacionComponent},
    {path:"canales", component: CanalComponent}, 
    {path: "centros", component: CentroComponent},
    {path: "generos", component: GeneroComponent},
    {path: "jerarquias_axo", component: JerarquiasAxoComponent},
    {path: "jerarquias_aptos", component: JerarquiasAptosComponent},
    {path: "categoria_demanda", component: CategoriaDemComponent},
  ]}, 

  // {path:"organizacion", component: OrganizacionComponent},
  {path: "**", component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
