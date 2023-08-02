import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-jerarquias-axo',
  templateUrl: './jerarquias-axo.component.html',
  styleUrls: ['./jerarquias-axo.component.scss'],
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
export class JerarquiasAxoComponent {
  
  constructor(public api: BackendService){
    this.api.jerarquias_axo().subscribe((data: any) => {
      const resp = data

      this.jerarquias = resp.jerarquias
      this.jerarquias_f = this.jerarquias

      this.n1_jerarquias = resp.n1

      console.log(this.jerarquias);
      console.log(this.n1_jerarquias);
    })
  }

  jerarquias: any = []
  jerarquias_f: any = []

  n1_jerarquias: any =  []
  n1_jerarquia: any = "todas"

  filtrado_bu(){
    console.log(this.n1_jerarquia);
    
    if(this.n1_jerarquia == "todas"){
      this.jerarquias_f = this.jerarquias
    }else{
      this.jerarquias_f = this.jerarquias.filter((marca: any) => marca.N1_Jerarquia == this.n1_jerarquia)
    }
  }
}
