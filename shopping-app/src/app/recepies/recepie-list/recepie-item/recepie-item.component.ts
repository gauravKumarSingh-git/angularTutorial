import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent {
  @Input() recepie: Recepie;

  @Output() recepieSelected = new EventEmitter<void>()

  onRecepieClick(){
    this.recepieSelected.emit();
  }
}
