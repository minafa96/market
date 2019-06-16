import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-support-content',
  templateUrl: './support-content.component.html',
  styleUrls: ['./support-content.component.css']
})
export class SupportContentComponent implements OnInit {

  title: string = 'پشتیبانی';
  body: string = '...';
  des: string = '...';
  keywords: string[] = ['support'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/support/support-edit']);
  }
}
