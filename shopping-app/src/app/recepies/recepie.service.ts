import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { Recepie } from './recepie.model';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  private recepies: Recepie[] = [
    new Recepie(
      'Litti Chokha', 
      'Litti Chokha is a healthy comfort food', 
      'https://www.secondrecipe.com/wp-content/uploads/2019/11/litti-chokha-1.jpg',
      [
        new Ingredient ('Chana Dal', 1),
        new Ingredient ('Potato', 2),
        new Ingredient('Tomato', 2),
      ]
      ),

    new Recepie(
      'Masala Dosa', 
      'Made from rice and lentil batter filled with spicy garnished mashed potato', 
      'https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2019/Id_Fresh_Masala_Dosa_Recipe_With_Sambar_and_Chutney_2_1600.jpg',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Urad Dal', 1),
        new Ingredient('Potato', 2)
      ]
      )
  ];

  getRecepies() {
    return this.recepies.slice();
  }

  getRecepie(index: number){
    return this.recepies[index];
  }

  constructor() { }
}
