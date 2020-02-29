import { Component, OnInit, ViewChild, Output, Input , EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {
  previousMultiplyResult: number;
  inputMultiplyValue: number;
  Multiplied = 'Multiplied';
  @Input() multiplyResult: number;
  @Input() countResult: number;
  @Output() multiplyEvent = new EventEmitter<number>();
  @Output()  previousMultiplyEvent = new  EventEmitter<number>();
  @Output() inputMultiplyEvent = new EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();
   @Output() operationEvent = new EventEmitter<string>();

  operation: number;
  plusone: number;


  constructor() { }

  Multiply() {
    this.previousMultiplyResult = this. multiplyResult ;
    this.multiplyResult *= this.multiplyResult;
    this.inputMultiplyValue = this.previousMultiplyResult;
    this.multiplyEvent.emit(this.multiplyResult);
    this.inputMultiplyEvent.emit(this.inputMultiplyValue);
    this.previousMultiplyEvent.emit(this.previousMultiplyResult);
    this.operationEvent.emit(this.Multiplied);
    if (this.multiplyResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }
  }
    onEnter(value: number) {
    this.previousMultiplyResult = this.multiplyResult;
    this.inputMultiplyValue = value ;
    this.multiplyResult = +this.previousMultiplyResult * +this.inputMultiplyValue ;
    this.multiplyEvent.emit(this.multiplyResult);
    this.inputMultiplyEvent.emit(this.inputMultiplyValue);
    this.previousMultiplyEvent.emit(this.previousMultiplyResult);
    this.multiplyEvent.emit(this.multiplyResult);
    this.operationEvent.emit(this.Multiplied);
    if (this.multiplyResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }


  }
  ngOnInit() {
  }


}
