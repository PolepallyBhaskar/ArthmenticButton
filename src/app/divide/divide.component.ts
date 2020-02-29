import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {
  inputDivideValue: number ;
  previousDivideResult: number;
   Divided = 'Divided';
  @Input() divideResult: number ;
  @Input() countResult: number;
  @Output() divideEvent = new EventEmitter<number>();
  @Output()  previousDivideEvent = new  EventEmitter<number>();
  @Output() inputDivideEvent = new EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();
  @Output() operationEvent = new EventEmitter<string>();




  constructor() { }

  ngOnInit() {
  }
  Divide() {
    this.previousDivideResult = this.divideResult ;
    this.divideResult /= this.divideResult;
    this.inputDivideValue = this.previousDivideResult;
    this.inputDivideEvent.emit(this.inputDivideValue);
    this.divideEvent.emit(this.divideResult);
    this.previousDivideEvent.emit(this.previousDivideResult);
    this.operationEvent.emit(this.Divided);


    if (this.divideResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }

  }
    onEnter(value: number) {
    this.previousDivideResult = this.divideResult;
    this.inputDivideValue = value ;
    this.divideResult = +this.previousDivideResult / +this.inputDivideValue ;
    this.divideEvent.emit(this.divideResult);
    this.inputDivideEvent.emit(this.inputDivideValue);
    this.previousDivideEvent.emit(this.previousDivideResult);
    this.divideEvent.emit(this.divideResult);
    this.operationEvent.emit(this.Divided);
    if (this.divideResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }


  }
}
