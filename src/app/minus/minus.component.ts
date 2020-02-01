import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent implements OnInit {

  @Input() minusResult: number;
  @Input() countResult: number;
  @Output() minusEvent = new EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  Minus() {
    this.minusResult -= 1;
    this.minusEvent.emit(this.minusResult);
    if (this.minusResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }

  }
}
