import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discounts-list',
  templateUrl: './discounts-list.component.html',
  styleUrls: ['./discounts-list.component.css']
})
export class DiscountsListComponent implements OnInit {
  displayedColumns = ['code', 'name', 'percent', 'setting'];
  dataSource = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  remove () {}
  edit () {
    this.router.navigate(['/discounts/edit']);
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
