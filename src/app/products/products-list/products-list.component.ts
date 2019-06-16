import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {SocketService} from '../../tools/services/socket.service';
import {Router} from '@angular/router';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ChangeSupplyComponent} from '../change-supply/change-supply.component';

export interface IProduct {
  title: string;
  part: string;
  price: number;
  disPrice: number;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['title', 'part', 'price', 'disPrice', 'setting'];
  data: IProduct[] = [];
  dataSource;
  dialogRef;

  constructor(private socket: SocketService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.socket.socket.on('list product', msg => {
      this.data = [...msg];
      this.dataSource = new MatTableDataSource(this.data);
    });
  }
  remove () {}
  edit () {
    this.router.navigate(['/products/edit']);
  }
  changeSupply(data) {
    this.dialogRef = this.dialog.open(ChangeSupplyComponent, {
      width: '400px',
      data: data
    });
    /*dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });*/
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.socket.socket.emit('list product', {});
  }

  ngOnDestroy(): void {
  }
}

