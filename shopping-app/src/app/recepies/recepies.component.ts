import { Component } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent {
  selectedRecepie: Recepie;

}
