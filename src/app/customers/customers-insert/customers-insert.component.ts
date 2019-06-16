import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-customers-insert',
  templateUrl: './customers-insert.component.html',
  styleUrls: ['./customers-insert.component.css']
})
export class CustomersInsertComponent implements OnInit {
  defaultCountry = 'ایران';
  countries: string[] = ['ایران'];
  states: string[] = ['تهران'];
  cities: string[] = ['تهران'];
  constructor() { }

  ngOnInit() {
  }
onSubmit(form: NgForm) {
    console.log('ok');
    console.log(form);
}
}
