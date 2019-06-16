import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parts-list',
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent implements OnInit {
  displayedColumns = ['name', 'setting'];
  dataSource = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  remove () {}
  edit () {
    this.router.navigate(['/parts/edit']);
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
