import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent implements OnInit {
  previousMinusResult: number ;
  inputMinusValue: number ;
  Subtracted = 'Subtracted';
  @Input() minusResult: number;
  @Input() countResult: number;
  @Output() previousMinusEvent = new EventEmitter<number>();
  @Output() inputMinusEvent = new EventEmitter<number>();
  @Output() minusEvent = new EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();
  @Output() operationEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  Minus() {
    this.previousMinusResult = this. minusResult ;
    this.minusResult -= 1;
    this.inputMinusValue = 1;

    this.minusEvent.emit(this.minusResult);
    this.inputMinusEvent.emit(this.inputMinusValue);
    this.previousMinusEvent.emit(this.previousMinusResult);
    this.operationEvent.emit(this.Subtracted);
    if (this.minusResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }

  }
  onEnter(value: number) {
    this.previousMinusResult = this.minusResult;
    this.inputMinusValue = value ;
    this.minusResult = +this.previousMinusResult - +this.inputMinusValue ;
    this.minusEvent.emit(this.minusResult);
    this.inputMinusEvent.emit(this.inputMinusValue);
    this.previousMinusEvent.emit(this.previousMinusResult);
    this.minusEvent.emit(this.minusResult);
    this.operationEvent.emit(this.Subtracted);
    if (this.minusResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }


  }
}
