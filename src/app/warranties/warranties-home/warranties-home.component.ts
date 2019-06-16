import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-warranties-home',
  templateUrl: './warranties-home.component.html',
  styleUrls: ['./warranties-home.component.css']
})
export class WarrantiesHomeComponent implements OnInit {

  activeLink = 'list';
  constructor() { }

  ngOnInit() {
  }

}
