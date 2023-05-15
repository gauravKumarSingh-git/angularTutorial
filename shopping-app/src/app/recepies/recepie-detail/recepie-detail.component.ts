import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent {

  @Input() recepie: Recepie;

  constructor(private shoppingListService: ShoppingListService) {}

  addToShoppingList(){
    // for(let i = 0 ; i< this.recepie.ingredients.length ; i++){
    //   this.shoppingListService.addIngredient(this.recepie.ingredients.at(i));
    // }

    for(let ingredient of this.recepie.ingredients){
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
