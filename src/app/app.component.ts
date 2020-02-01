import { Component, ViewChild } from '@angular/core';
import { PluseComponent } from './pluse/pluse.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Button';
  finalOutput = 0;
  finalCount = 0;


  receivePluseOutput($event: any) {
    this.finalOutput = $event;

  }
  receivePluseCount($event: any) {
    this.finalCount = $event;
  }
  receiveMinusOutput($event: any) {
   this.finalOutput = $event;
  }
  receiveMinusCount($event: any) {
    this.finalCount = $event;
  }
  receiveMultiplyOutput($event: any) {
    this.finalOutput = $event;
  }
  receiveMultiplyCount($event: any) {
    this.finalCount = $event;
  }
  receiveDivideOutput($event: any) {
    this.finalOutput = $event;
  }
  receiveDivideCount($event: any) {
    this.finalCount = $event;
  }

  ClearAll() {
    this.finalCount =  0;
    this.finalOutput = 0;

  }

}
