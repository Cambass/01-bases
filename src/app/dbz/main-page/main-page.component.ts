import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
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

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar(){
    this.personaje.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  cambiarNombre(event: any){

  }

}
