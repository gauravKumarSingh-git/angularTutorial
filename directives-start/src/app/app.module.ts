import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight-directive';
import { BetterHighlightComponent } from './better-highlight/better-highlight.component';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent, 
    BasicHighlightDirective, BetterHighlightComponent, UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
