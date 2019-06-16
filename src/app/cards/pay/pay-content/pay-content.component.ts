import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pay-content',
  templateUrl: './pay-content.component.html',
  styleUrls: ['./pay-content.component.css']
})
export class PayContentComponent implements OnInit {

  title: string = 'پرداخت در محل';
  body: string = '...';
  des: string = '...';
  keywords: string[] = ['pay'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/pay/pay-edit']);
  }
}
