import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-home',
  templateUrl: './parts-home.component.html',
  styleUrls: ['./parts-home.component.css']
})
export class PartsHomeComponent implements OnInit {

  activeLink = 'list';

  constructor() { }

  ngOnInit() {
  }

}
