import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-canal',
  templateUrl: './canal.component.html',
  styleUrls: ['./canal.component.scss'],
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
export class CanalComponent {

  constructor(public api: BackendService){
    this.canales = this.api.canales().subscribe((data: any) => {
      this.canales = data
      console.log(this.canales);
      
    })
  }

  canales: any = []

}
