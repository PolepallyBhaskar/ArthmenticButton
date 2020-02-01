import { Component, OnInit, ViewChild, Output, Input , EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  @Input() multiplyResult: number;
  @Input() countResult: number;
  @Output() multiplyEvent = new EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();

  constructor() { }

  Multiply() {
    this.multiplyResult *= this.multiplyResult;
    this.multiplyEvent.emit(this.multiplyResult);
    if (this.multiplyResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }
  }
  ngOnInit() {
  }


}
