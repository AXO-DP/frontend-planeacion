import { Component } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})


export class OrganizacionComponent {
  constructor(public api: BackendService){
    this.api.organizaciones().subscribe((data: any) => {
      this.marcas = data
      this.marcas_f = this.marcas
    })
  }

  marcas: any = []
  marcas_f: any = []

  bu: any = ["BU2", "BU3", "BU4", "BU5"]
  bu_seleccionada: any = "todas"

  bu2_marcas: any = []
  bu3_marcas: any = []
  bu4_marcas: any = []
  bu5_marcas: any = []

  filtrado_bu(){
    console.log(this.bu_seleccionada);
    
    if(this.bu_seleccionada == "todas"){
      this.marcas_f = this.marcas
    }else{
      this.marcas_f = this.marcas.filter((marca: any) => marca.BD_BU == this.bu_seleccionada)
    }
  }

}
