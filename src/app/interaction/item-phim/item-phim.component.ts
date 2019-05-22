import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  
  //Input: chuyển data từ "cha sang con" thông qua thuộc tính Input của component đó 
  // nhận lại movieChuyenDi từ danh-sach-phim.html
  @Input() movieChuyenDi; 

  //Output: chuyển data từ "con ra cha" qua obj EventEmitter
  //truyền ra ngoài cái tên "eventLike"
  @Output() eventLike = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.movieChuyenDi);
    
  }

  like(){
    //đẩy dữ liệu ra ngoài
    this.eventLike.emit(this.movieChuyenDi);
  }

}
