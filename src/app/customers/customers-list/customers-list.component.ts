import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns = ['name', 'username', 'status', 'phone', 'setting'];
  dataSource;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }
remove () {}
edit () {}
showProfile() {}
}
