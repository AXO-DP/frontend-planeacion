import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanalComponent } from './canal/canal.component';
import { CentroComponent } from './centro/centro.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CanalComponent,
    CentroComponent,
    OrganizacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RelacionesModule { }
