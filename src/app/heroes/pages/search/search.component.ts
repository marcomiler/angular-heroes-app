import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [ 
  ]
})
export class SearchComponent implements OnInit {

  termino: string = "";
  heroes: Heroe[] = [];
  heroeSelected: Heroe | undefined;

  constructor(private heroeService: HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroeService.getSuggestions(this.termino.trim())
    .subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    console.log(event);//esto nos ayuda a saber de que evento se trata y asi defino el tipado

    if(!event.option.value){
      this.heroeSelected = undefined;
      return;
    }

    const heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroeService.getHeroesById(heroe.id!)//le decimos que siempre tendra un valor en este caso
    .subscribe(heroe => this.heroeSelected = heroe);
  }

}
