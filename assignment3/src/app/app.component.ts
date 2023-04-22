import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';
  display = true;
  clicks = [];
  // counter = 1;

  onToggleDisplay(){
    this.display = !this.display;
    // this.clicks.push(this.counter++);
    this.clicks.push(new Date());
  }
  
}
