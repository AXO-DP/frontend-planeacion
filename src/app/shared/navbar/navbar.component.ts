import { Component } from '@angular/core';

import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend/backend.service';

declare let alertify: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(private api: BackendService, public router: Router){
    const org = localStorage.getItem("marca_seleccionada")
    const user = localStorage.getItem("user")

    this.marca = org
    this.user = user
    
    this.usuario_marcas()
  }

  marcas: any = []
  marca: any = ""
  user: any = ""

  cambioMarca(){
    localStorage.setItem("marca_seleccionada", this.marca)
    location.reload()
  }

  usuario_marcas(){
    this.api.usuario_organizaciones(this.user).subscribe((data: any) => {
      this.marcas = data
      const existe_marca = this.marcas.some((marca_s: any) => marca_s.Organizacion === this.marca)
      
      if(!existe_marca){

        this.marca = this.marcas[0].Organizacion
				// console.log(this.marca);
				
    		localStorage.setItem("marca_seleccionada", this.marca)
				// console.log(this.marcas[0].Organizacion);
					
			}
    })
  }

  logout(){
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cerrando sesión"
    })
    Swal.showLoading();

    setTimeout(()=>{
      localStorage.removeItem("user")

      this.router.navigate(["login"])
      Swal.close(); 
    }, 500) 

  }

  


}

