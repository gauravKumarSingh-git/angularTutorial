import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() intervalFired = new EventEmitter<number>();

  interval = null;
  count = 0;
  
  startGame(){
    if(this.interval) return;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count++);
    }, 1000);
  }

  endGame(){
    clearInterval(this.interval);
  }
}
