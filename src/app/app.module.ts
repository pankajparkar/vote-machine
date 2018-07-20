import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { VoteComponent } from './vote/vote.component';

@NgModule({
  declarations: [
    VoteComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [VoteComponent]
})
export class AppModule { 
  
  ngDoBootstrap(app){
    let injector = app._injector
    let currentElement = createCustomElement(VoteComponent, {injector});
    customElements.define('vote-cmp', currentElement)
  }
  
}