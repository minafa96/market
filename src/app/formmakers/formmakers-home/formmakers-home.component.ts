import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formmakers-home',
  templateUrl: './formmakers-home.component.html',
  styleUrls: ['./formmakers-home.component.css']
})
export class FormmakersHomeComponent implements OnInit {

  activeLink = 'list';

  constructor() { }

  ngOnInit() {
  }

}
