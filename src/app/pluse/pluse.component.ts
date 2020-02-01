import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pluse',
  templateUrl: './pluse.component.html',
  styleUrls: ['./pluse.component.css']
})
export class PluseComponent implements OnInit {
  @Input() pluseResult: number ;
  @Input() countResult: number;
  @Output() pluseEvent  = new EventEmitter<number>();
  @Output() countEvent = new EventEmitter<number>();


  constructor() { }
  Pluse() {
    this.pluseResult += 1;
    this.pluseEvent.emit(this.pluseResult);
    if (this.pluseResult % 5 === 0) {
      this.countResult += 1 ;
      this.countEvent.emit(this.countResult);
    }




  }

  ngOnInit() {


  }


}
