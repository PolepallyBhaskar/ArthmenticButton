import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';





import { AppComponent } from './app.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { PlusComponent } from './plus/plus.component';
import { MinusComponent } from './minus/minus.component';
import { DivideComponent } from './divide/divide.component';
import { HighlightDirective } from './highlight.directive';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiplyComponent,
    PlusComponent,
    MinusComponent,
    DivideComponent,
    HighlightDirective,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule



  ],




  bootstrap: [AppComponent]
})
export class AppModule {

}
