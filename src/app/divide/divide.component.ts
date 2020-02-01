import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

  @Input() divideResult: number ;
  @Input() countResult: number;
  @Output() divideEvent = new EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  Divide() {
    this.divideResult /= this.divideResult;
    this.divideEvent.emit(this.divideResult);
    if (this.divideResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }

  }
}
