import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-us-content',
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.css']
})
export class AboutUsContentComponent implements OnInit {

  title: string = 'درباره ما';
  body: string = 'متن بدنه ی دلخواه...';
  des: string = '...';
  keywords: string[] = ['about us', 'about'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/about/about-edit']);
  }
}
