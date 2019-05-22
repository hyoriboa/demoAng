import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss']
})
export class NgforComponent implements OnInit {

  public DSNV:any = [
    {ten: 'luan', tuoi:'22'},
    {ten: 'phong', tuoi:'32'},
    {ten: 'tun', tuoi:'12'},
    {ten: 'long', tuoi:'5'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
