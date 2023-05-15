import { EventEmitter, Injectable } from '@angular/core';
import { Recepie } from './recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  recepieSelected = new EventEmitter<Recepie>();

  private recepies: Recepie[] = [
    new Recepie('A Test Recepie', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'),
    new Recepie('Another Test Recepie', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505')
  ];

  getRecepies() {
    return this.recepies.slice();
  }

  constructor() { }
}
