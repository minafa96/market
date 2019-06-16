import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banners-home',
  templateUrl: './banners-home.component.html',
  styleUrls: ['./banners-home.component.css']
})
export class BannersHomeComponent implements OnInit {

  activeLink = 'list';

  constructor() { }

  ngOnInit() {
  }

}
