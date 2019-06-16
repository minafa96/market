import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-send-ways-list',
  templateUrl: './send-ways-list.component.html',
  styleUrls: ['./send-ways-list.component.css']
})
export class SendWaysListComponent implements OnInit {
  displayedColumns = ['name', 'price', 'setting'];
  dataSource = [];


  constructor(private router: Router) { }
  ngOnInit() {
  }

  remove () {}
  edit () {
    this.router.navigate(['/send-ways-edit']);
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
