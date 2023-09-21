import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import Swal from 'sweetalert2';


declare let alertify: any;


@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.scss'],
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

export class MaterialesComponent {
  constructor(public api: BackendService){

    const marca = localStorage.getItem("marca_seleccionada")
    

    this.api.materiales(marca).subscribe((data: any) => {
      const resp = data
      console.log(resp);
      
      this.materiales = resp.materiales_totales
      this.materiales_f = resp.materiales

      this.generos = resp.generos
      this.temporadas = resp.temporadas
      this.tipo_mat = resp.tipo_mat

      console.log(resp);      
    })

  }

  materiales: any = []
  materiales_f:any = []

  generos: any = []
  jerarquias: any = []
  temporadas: any = []

  tipo_mat: any = []
  f_tipo_mat: any = []


  Cambio(i: any){
    this.materiales_f[i].Status = 1
  }


  Guardar(i: any){
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();

    setTimeout(()=>{
      const mat_guardar = this.materiales_f[i]
      this.api.materiales_cambios(mat_guardar).subscribe((data: any) => {
        const respuesta = data
        console.log(respuesta)

        if(data){
          alertify.success("Cambio realizado")
          this.materiales_f[i].Status = false
        }else{
          alertify.error("Error al modificar. Intentar de nuevo");
        }
      })
      Swal.close(); 
    }, 300) 
  }



  filtrado(){
    // this.materiales_f = this.materiales.filter((material: any) => )
  }


}
