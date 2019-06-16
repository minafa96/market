import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-org-warranty-content',
  templateUrl: './org-warranty-content.component.html',
  styleUrls: ['./org-warranty-content.component.css']
})
export class OrgWarrantyContentComponent implements OnInit {

  title: string = 'ضمانت اصل بودن';
  body: string = '...';
  des: string = '...';
  keywords: string[] = ['warranty', 'original-warranty'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/org-warranty/org-warranty-edit']);
  }
}
