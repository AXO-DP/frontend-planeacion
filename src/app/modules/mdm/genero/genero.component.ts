import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss'],
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
export class GeneroComponent {
  constructor(public api: BackendService){
    this.api.generos().subscribe((data:any) => {
      this.generos = data
      console.log(this.generos);
      
    })
  }

  generos: any = []

}
