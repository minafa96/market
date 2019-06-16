import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-change-supply',
  templateUrl: './change-supply.component.html',
  styleUrls: ['./change-supply.component.css']
})
export class ChangeSupplyComponent implements OnInit {
  newSupply: number ;
  title: string = '';
  supply: number = 0;

  constructor(public dialogRef: MatDialogRef<ChangeSupplyComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
