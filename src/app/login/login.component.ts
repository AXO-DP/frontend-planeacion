import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';



declare let alertify: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger("animacion", [
      transition(':enter', [
        style({ 
          opacity: 1,
          transform: "translateX(-100%)"
        }),
        animate('1s ease-out', style({ 
                      opacity: 1, 
                      transform: "translateX(0%)"
                    })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent {

  constructor(public router: Router, private api: BackendService){

  }

  username: string = "jfloresp";
  password: string = "AXO-123";

  onSubmit() {
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();

    setTimeout(()=>{
      this.api.login(this.username, this.password).subscribe((data: any) => {
        const respuesta = data
        console.log(respuesta)
        if(data){
          localStorage.setItem("user", this.username)
          this.router.navigate(["inicio"])
        }else{
          alertify.error("Usuario o contraseña incorrecto.");
        }
      })
      Swal.close(); 
    }, 500) 
  }
}
