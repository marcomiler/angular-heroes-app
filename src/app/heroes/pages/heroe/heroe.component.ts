import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  `
    img{
      width: 80%;
      height: 60%;
      border-radius: 5%;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    //this.activatedRoute.params.subscribe(({id}) => console.log(id));
    this.activatedRoute.params
    .pipe(
      switchMap((params) => this.heroeService.getHeroesById(params.id)),
      tap(console.log)
    )
    .subscribe(heroe => {
      this.heroe = heroe;
    })
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
