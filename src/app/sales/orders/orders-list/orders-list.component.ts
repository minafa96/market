import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  displayedColumns = ['customerId', 'productId', 'address', 'sendStat', 'setting'];
  dataSource = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  remove () {}
  edit () {
    this.router.navigate(['/orders-edit']);
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
