import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  name:string = "Cybersoft";
  status:boolean = true;

  statusLogin:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clickButton(){
    this.status = !this.status;
  }

  hidden(){
    this.status = false;
  }

  show(){
    this.status = true;
  }

  dangXuat(){
    this.statusLogin = false;
  }

  dangNhap(){
    this.statusLogin = true;
  }


}
