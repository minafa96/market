import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {Router} from '@angular/router';

export interface Keywords {
  name: string;
}
@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})


export class ProductsInsertComponent implements OnInit {

  parts = [];
  warranties = [];
  sendWays = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords: Keywords[] = [{name: 'محصول'}];

  constructor(private router: Router) { }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our keyword
    if ((value || '').trim()) {
      this.keywords.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(keyword: Keywords): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }
  ngOnInit() {
  }
onSubmit() {}
onCancel() {
    console.log('cancel');
    this.router.navigate(['/products/']);
}
}
