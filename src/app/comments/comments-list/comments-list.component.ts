import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ResponseComponent} from '../response/response.component';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  displayedColumns = ['name', 'productId', 'msg', 'setting'];
  data = [{name: 'mina', productId: '4', msg: 'ssssssssssssssss ssssssssssssssssssssssssssssss' +
      'sss' }];
  dataSource = new MatTableDataSource(this.data);
  dialogRef;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  remove() {}
  response(data) {
      this.dialogRef = this.dialog.open(ResponseComponent, {
      width: '400px',
      data: data
    });
    /*dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });*/
  }
}
