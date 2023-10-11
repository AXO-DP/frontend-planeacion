import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import Swal from 'sweetalert2';
import { interval, Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';


declare let alertify: any;

@Component({
  selector: 'app-tickets-calculadora',
  templateUrl: './tickets-calculadora.component.html',
  styleUrls: ['./tickets-calculadora.component.scss'],
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
export class TicketsCalculadoraComponent {

  private refreshSubscription: Subscription;

  constructor(public api: BackendService){
    this.usuario_marcas();
    this.obtenerEscenarios();

    // Actualizacion de la tabla cada cierto intervalo
    this.refreshSubscription = interval(6000).subscribe(() => {
      this.api.imprimir_tickets_pplan().subscribe( (data:any) => {
        this.historial = data
      })
    });

  }

  marcas: any = ["M003", "M004", "M005", "M006"]
  cierres: any = []
  escenarios: any = []
  escenarios_totales: any = []
  tickets: any = []
  historial: any = []

  ticket: any = {
    Marca: "", Cierre: "", Escenario: "", Id_Escenario: ""
  }

  obtenerEscenarios(){
    this.api.escenarios_pplan().subscribe((data: any) => {
      const resp = data
      this.cierres = resp.cierres
      this.escenarios_totales = resp.escenarios
    })
  }

  usuario_marcas(){
    const user = localStorage.getItem("user")
    this.api.usuario_organizaciones(user).subscribe((data: any) => {
      this.marcas = data
    })
  }

  cambioDeCierre(){
    const cierre_seleccionado = this.cierres.filter((cierre :any) => cierre.Nombre_Cierre == this.ticket.Cierre)
    const id_cierre = cierre_seleccionado[0].Id_Cierres

    this.escenarios = this.escenarios_totales.filter((esc : any) => esc.Id_Cierre == id_cierre)
  }

  cambioDeEscenario(){
    const esc_sel = this.escenarios.filter((esc : any) => esc.Nombre_Version == this.ticket.Escenario)
    const id_escenario = esc_sel[0].Id_Escenario

    this.ticket.Id_Escenario = id_escenario
  }


  agregarTicket(){
    console.log(this.ticket);
    
    // Validacion
    if( this.ticket.Marca.length > 1 && this.ticket.Cierre.length > 1 && this.ticket.Escenario.length > 1){
      alertify.success("Se ha agregado")
      this.tickets.push(this.ticket)

      this.ticket = {}

    }else{
      alertify.error("Ingrese los datos, correctamente")
    }

  }

  borrarTicket(i: any){
    this.tickets.splice(i,1)
  }




  ejecutarTickets(){
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();
    
    const user = localStorage.getItem("user")

    const datos = {user, tickets: this.tickets}

    setTimeout(()=>{
      this.api.guardar_tickets_pplan(datos).subscribe((data: any) => {
        const respuesta = data
        console.log(respuesta)

        if(data){
          alertify.success("Tickets guardados.")
          this.tickets = []
        }else{
          alertify.error("Error al guardar tickets");
        }
      })
      Swal.close(); 
    }, 300) 

  }

}
