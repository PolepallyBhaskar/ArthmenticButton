import { Component, OnInit, ViewChild, Output, Input , EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  @Input() multiplyResult: number;
  previousMultiplyResult: number;
  @Input() countResult: number;
  @Output() multiplyEvent = new EventEmitter<number>();
  @Output()  previousMultiplyEvent = new  EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();

  operation: number;
  plusone: number;


  constructor() { }

  Multiply() {
    this.previousMultiplyResult = this.multiplyResult ;
    this.multiplyResult *= this.multiplyResult;
    this.multiplyEvent.emit(this.multiplyResult);
    this.previousMultiplyEvent.emit(this.previousMultiplyResult);
    if (this.multiplyResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }
  }
  ngOnInit() {
  }


}
