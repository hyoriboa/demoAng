import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-ng-if',
  templateUrl: './bai-tap-ng-if.component.html',
  styleUrls: ['./bai-tap-ng-if.component.scss']
})
export class BaiTapNgIfComponent implements OnInit {

  name:string = '';
  password:string = '';

  isLogin:boolean = false;

  

  constructor() { }

  ngOnInit() {
    //hàm chính giống như main
    let userLogin = localStorage.getItem('loginForm');
    console.log(userLogin);
    
    if(userLogin !== null){
      this.name = userLogin;
      this.isLogin = true;
    }
  }

  dangNhap(username, pass){
    // this.username = username;
    // this.password = pass;
    // if(this.username === 'cybersoft' && this.password === 'cybersoft'){
    //   this.username = this.username;
    //   this.isLogin = true;
    //   localStorage.setItem('loginForm', JSON.stringify(this.name));
    // }
    if(username === 'cybersoft' && pass === 'cybersoft'){
        this.name = username;
        this.isLogin = true;
        localStorage.setItem('loginForm', JSON.stringify(username));
      }
  }

}
