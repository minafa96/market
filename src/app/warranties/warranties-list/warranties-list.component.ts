import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-warranties-list',
  templateUrl: './warranties-list.component.html',
  styleUrls: ['./warranties-list.component.css']
})
export class WarrantiesListComponent implements OnInit {

  displayedColumns = ['name', 'setting'];
  data = [];
  dataSource = new MatTableDataSource(this.data);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  remove () {}
  edit () {
    this.router.navigate(['/warranties-edit']);
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
