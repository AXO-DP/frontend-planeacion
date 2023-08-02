import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdmMainComponent } from './mdm-main/mdm-main.component';
import { JerarquiasAxoComponent } from './jerarquias-axo/jerarquias-axo.component';
import { FormsModule } from '@angular/forms';
import { CategoriaDemComponent } from './categoria-dem/categoria-dem.component';
import { JerarquiasAptosComponent } from './jerarquias-aptos/jerarquias-aptos.component';
import { GeneroComponent } from './genero/genero.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MdmMainComponent,
    JerarquiasAxoComponent,
    CategoriaDemComponent,
    JerarquiasAptosComponent,
    GeneroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ]
})
export class MdmModule { }
