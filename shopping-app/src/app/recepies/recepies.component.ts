import { Component } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent {
  selectedRecepie: Recepie;

}
