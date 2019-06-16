import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-warranty-content',
  templateUrl: './warranty-content.component.html',
  styleUrls: ['./warranty-content.component.css']
})
export class WarrantyContentComponent implements OnInit {

  title: string = 'ضمانت';
  body: string = '...';
  des: string = '...';
  keywords: string[] = ['warranty'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/warranty/warranty-edit']);
  }
}
