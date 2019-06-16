import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-us-content',
  templateUrl: './contact-us-content.component.html',
  styleUrls: ['./contact-us-content.component.css']
})
export class ContactUsContentComponent implements OnInit {

  title: string = 'تماس با ما';
  body: string = 'متن بدنه ی دلخواه...';
  des: string = '...';
  keywords: string[] = ['contact us', 'contact'];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick() {
    this.router.navigate(['/contact/contact-edit']);
  }
}
