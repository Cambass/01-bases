import {Component} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personaje: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 10000
    }
  ];

  nuevo: Personaje[] = [];

  agregarNuevoPersonaje(personaje: Personaje){
    this.personaje.push(personaje);
  }

}
