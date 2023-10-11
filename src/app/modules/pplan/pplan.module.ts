import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsCalculadoraComponent } from './tickets-calculadora/tickets-calculadora.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    TicketsCalculadoraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ]
})
export class PplanModule { }
