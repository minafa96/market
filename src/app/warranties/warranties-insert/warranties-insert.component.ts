import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-warranties-insert',
  templateUrl: './warranties-insert.component.html',
  styleUrls: ['./warranties-insert.component.css']
})
export class WarrantiesInsertComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cancel() {
    this.router.navigate(['/warranties/']);
  }
}
