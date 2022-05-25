import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  @Output() NuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){

    if (this.nuevo.nombre.trim().length === 0){ return; }

    this.NuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }

  cambiarNombre(event: any){

  }


}
