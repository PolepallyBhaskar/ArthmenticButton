import { Component, ViewChild } from '@angular/core';
import { PlusComponent } from './plus/plus.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Button';
  finalOutput = 0;
  finalCount = 0;
  previousOutput: number;
  operation: string;
  value: number;


  receivePlusOutput($event: any) {
    this.finalOutput = $event;
    this.previousOutput = this.finalOutput - 1;
    this.operation =  '+';
    this.value = 1;


  }
  receivePlusCount($event: any) {
    this.finalCount = $event;
  }
  receiveMinusOutput($event: any) {
   this.finalOutput = $event;
   this.previousOutput = this.finalOutput + 1 ;
   this.operation = '-';
   this.value = 1;
  }
  receiveMinusCount($event: any) {
    this.finalCount = $event;
  }
  receiveMultiplyOutput($event: any) {
    this.finalOutput = $event;

  }
  receiveMultiplyPrevious($event: any) {
    this.previousOutput = $event;
    this.operation = '*';
    this.value = this.previousOutput ;

  }
  receiveMultiplyCount($event: any) {
    this.finalCount = $event;
  }
  receiveDivideOutput($event: any) {
    this.finalOutput = $event;
  }
  receiveDividePrevious($event: any) {
    this.previousOutput = $event;

    this.operation = '/';
    this.value = this.previousOutput ;

  }
  receiveDivideCount($event: any) {
    this.finalCount = $event;
  }

  ClearAll() {
    this.finalCount =  0;
    this.finalOutput = 0;
    this.operation = '<<Empty Operation>>';
    this.previousOutput = 0;
    this.value = 0;


  }

}
