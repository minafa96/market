import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sliders-list',
  templateUrl: './sliders-list.component.html',
  styleUrls: ['./sliders-list.component.css']
})
export class SlidersListComponent implements OnInit {

  displayedColumns = ['name', 'setting'];
  dataSource = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  remove () {}
  edit () {
    this.router.navigate(['/sliders/edit']);
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
