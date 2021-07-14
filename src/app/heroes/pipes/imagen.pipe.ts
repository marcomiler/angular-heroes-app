import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe): string{
    return value != undefined && value != null ? `assets/heroes/${value.id}.jpg` : "assets/heroes/no-image.png"
  }

}
