import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {
  activeLink = 'list';

  constructor() { }

  ngOnInit() {
  }

}
