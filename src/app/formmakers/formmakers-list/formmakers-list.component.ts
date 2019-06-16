import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formmakers-list',
  templateUrl: './formmakers-list.component.html',
  styleUrls: ['./formmakers-list.component.css']
})
export class FormmakersListComponent implements OnInit {

  displayedColumns = ['name', 'form', 'setting'];
  dataSource = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  remove () {}
  edit () {
    this.router.navigate(['/formmakers/edit']);
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
