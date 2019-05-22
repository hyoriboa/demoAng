import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe-bus',
  templateUrl: './ghe-bus.component.html',
  styleUrls: ['./ghe-bus.component.scss']
})
export class GheBusComponent implements OnInit {

  @Input() ghe;

  @Output() eventGhe = new EventEmitter();

  trangThaiChon = false;

  constructor() { }

  ngOnInit() {
  }

  chonGhe(){
    this.trangThaiChon = !this.trangThaiChon;
    let objGhe = {
      trangThai: this.trangThaiChon,
      ghe: this.ghe
    };
    // this.eventGhe.emit(this.ghe);
    this.eventGhe.emit(objGhe);
  }

  

}
