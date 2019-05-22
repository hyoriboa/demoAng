import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent implements OnInit {

  bgColor:string = "pink";

  name:string = "Luanho";

  constructor() { }

  ngOnInit() {
  }

}
