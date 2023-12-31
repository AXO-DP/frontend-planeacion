import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import Swal from 'sweetalert2';


declare let alertify: any;


@Component({
  selector: 'app-jerarquias-aptos',
  templateUrl: './jerarquias-aptos.component.html',
  styleUrls: ['./jerarquias-aptos.component.scss'],
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


export class JerarquiasAptosComponent {

  constructor(public api: BackendService){

    const marca = localStorage.getItem("marca_seleccionada")

    this.api.jerarquias_aptos(marca).subscribe((data: any) => {
      const resp = data
      console.log(resp);
      
      //Jerarquias Aptos
      this.jerarquias = resp.jerarquias
      this.jerarquias_f = this.jerarquias

      //Jerarquia Axo 
      this.n1_jerarquias = resp.n1
      //Jerarquia Axo N2
      this.n2_jerarquias = resp.n2

      //Categoria Demanda
      this.categoria_demanda = resp.cat_demanda
      console.log(this.categoria_demanda);
      

      //Subjerarquias N2 por cada elemento de Jerarquias Aptos
      this.jerarquias.forEach((jerarquia: any) => {
        jerarquia.N2_jerarquias_filtradas = this.n2_jerarquias.filter((n2: any) => n2.N1_Jerarquia == jerarquia.N1_Jerarquia)
        jerarquia.Status = 0
      });
    })
  }

  jerarquias: any = []
  jerarquias_f: any = []

  n1_jerarquias: any =  []
  filtro_n1: any = "todas"

  n2_jerarquias: any =  []
  n2_jerarquias_f: any = []

  categoria_demanda: any = []

  filtro_n2: any = "todas"


  CD_Seleccionado(i: any){
    this.jerarquias_f[i].Status = 1
  }


  N1_Seleccionado(i: any) {
    const valor_n1 = this.jerarquias_f[i].N1_Jerarquia

    this.jerarquias_f[i].N2_jerarquias_filtradas  = this.n2_jerarquias.filter((n2: any) => n2.N1_Jerarquia == valor_n1)
    this.jerarquias_f[i].Status = 1
    this.jerarquias_f[i].N2_Jerarquia = this.jerarquias_f[i].N2_jerarquias_filtradas[0].N2_Jerarquia
  }

  N2_Seleccionado(i: any){
    this.jerarquias_f[i].Status = 1
  }

  Guardar(i: any){
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();

    setTimeout(()=>{
      const jer_guardar = this.jerarquias_f[i]
      this.api.jerarquia_aptos_cambios(jer_guardar).subscribe((data: any) => {
        const respuesta = data
        console.log(respuesta)

        if(data){
          alertify.success("Cambio realizado")
          this.jerarquias_f[i].Status = false
        }else{
          alertify.error("Usuario o contraseña incorrecto.");
        }
      })
      Swal.close(); 
    }, 300) 
    
  }

  filtrado_bu(){

  }


  
}
