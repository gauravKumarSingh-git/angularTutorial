import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit{

  recepie: Recepie;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService, 
    private recepieService: RecepieService,
    private route: ActivatedRoute
    ) {}

  
  ngOnInit(): void {
    const id = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recepie = this.recepieService.getRecepie(this.id);
      }
    )
  }

  addToShoppingList(){
    // for(let i = 0 ; i< this.recepie.ingredients.length ; i++){
    //   this.shoppingListService.addIngredient(this.recepie.ingredients.at(i));
    // }

    for(let ingredient of this.recepie.ingredients){
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
