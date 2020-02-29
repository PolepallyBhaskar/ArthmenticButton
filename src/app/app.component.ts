import { Component, ViewChild } from '@angular/core';
import { PlusComponent } from './plus/plus.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  CurrentDate = new Date();
  title = 'Value Manipulation ';
  finalOutput = 0;
  finalCount = 0;
  previousOutput: number;
  operation: string;
  inputValue: number;
  value: number ;
  operationUsed = ' No Operation';
  Calculation = 'Calculation';
/* ADD */

  receivePlusOutput($event: number) {
    this.finalOutput = $event;

  }
  receivePlusPrevious($event: number) {
    this.previousOutput = $event;
    this.operation = '+';
    this.value = this.inputValue;

  }
  inputAddedValue($event: number) {
    this.inputValue = $event;

  }

  receivePlusCount($event: any) {
    this.finalCount = $event;
  }
  operationDone($event: string) {
    this.operationUsed = $event;
  }

  /* MINUS */
  receiveMinusOutput($event: any) {
   this.finalOutput = $event;

  }
  receiveMinusPrevious($event: any) {
    this.previousOutput = $event;
    this.operation = '-';
    this.value = this.inputValue ;

  }
    inputMinusValue($event: number) {
    this.inputValue = $event;

  }
  receiveMinusCount($event: any) {
    this.finalCount = $event;
  }

  /*MULTIPLY */
  receiveMultiplyOutput($event: any) {
    this.finalOutput = $event;

  }
  receiveMultiplyPrevious($event: any) {
    this.previousOutput = $event;
    this.operation = '*';
    this.value = this.inputValue ;

  }
  inputMultiplyValue($event: number) {
    this.inputValue = $event;

  }
  receiveMultiplyCount($event: any) {
    this.finalCount = $event;
  }
  /*DIVIDE */
  receiveDivideOutput($event: any) {
    this.finalOutput = $event;
  }
  receiveDividePrevious($event: any) {
    this.previousOutput = $event;
    this.operation = '/';
    this.value = this.inputValue ;

  }
  inputDivideValue($event: number) {
    this.inputValue = $event;

  }
  receiveDivideCount($event: any) {
    this.finalCount = $event;
  }
/* CLEAR ALL */
  ClearAll() {
    this.finalCount =  0;
    this.finalOutput = 0;
    this.operation = '<<Empty Calculation>>';
    this.previousOutput = 0;
    this.value = 0;
    this.operationUsed = 'No Operation' ;
    this.Calculation = ' ';



  }

}
