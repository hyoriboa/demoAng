import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent implements OnInit {

  mauchuBien:boolean = true;
  fontChuBien:boolean = true;



  constructor() { }

  ngOnInit() {
  }

}
