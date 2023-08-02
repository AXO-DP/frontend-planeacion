import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.component.html',
  styleUrls: ['./centro.component.scss'],
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
export class CentroComponent {
  constructor(public api: BackendService){
    const org = localStorage.getItem("marca_seleccionada")
    this.api.centros(org).subscribe((data: any) =>{
      const resp = data

      this.centros = resp.centros
      this.centros_f = this.centros
      this.canales = resp.canales

      console.log(this.canales);
    })
  }
  centros: any = []
  canales: any = []
  centros_f: any=[]

  canal_seleccionado: any = "todos"

  filtrado_canal(){
    console.log(this.canal_seleccionado);
    
    if(this.canal_seleccionado == "todos"){
      this.centros_f = this.centros
    }else{
      this.centros_f = this.centros.filter((centro: any) => centro.BD_Canal == this.canal_seleccionado)
    }
  }

}
