import { trigger, transition, style, animate, state } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-categoria-dem',
  templateUrl: './categoria-dem.component.html',
  styleUrls: ['./categoria-dem.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ])
    ]),
    
  ],
})
export class CategoriaDemComponent {
  constructor(public api: BackendService){
    this.api.categoria_demanda().subscribe((data: any) => {
      this.categorias = data
      this.categorias_f = this.categorias
      console.log(this.categorias);
    })
  }

  categorias: any = []
  categorias_f: any = []

  jerarquias: any = []
  jerarquias_f: any = []

  n1_jerarquias: any =  []
  n1_jerarquia: any = "todas"

  filtrado_bu(){

  }

}
