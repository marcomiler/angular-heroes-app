import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
      mat-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
      }
      
    `
  ]
})
export class HeroeTarjetaComponent{

  @Input() heroes!: Heroe;

 
}
