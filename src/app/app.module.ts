import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';
import { DivideComponent } from './divide/divide.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplyComponent,
    PlusComponent,
    MinusComponent,
    DivideComponent
  ],
  imports: [
    BrowserModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
