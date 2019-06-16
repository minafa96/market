import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rules-content',
  templateUrl: './rules-content.component.html',
  styleUrls: ['./rules-content.component.css']
})
export class RulesContentComponent implements OnInit {

  title: string = 'قوانین';
  body: string = '...';
  des: string = '...';
  keywords: string[] = ['rules'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/rules/rules-edit']);
  }
}
