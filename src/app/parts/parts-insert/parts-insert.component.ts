import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Keywords} from '../../products/products-insert/products-insert.component';
import {MatChipInputEvent} from '@angular/material';

export interface Keywords {
  name: string;
}

@Component({
  selector: 'app-parts-insert',
  templateUrl: './parts-insert.component.html',
  styleUrls: ['./parts-insert.component.css']
})
export class PartsInsertComponent implements OnInit {

  parts = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords: Keywords[] = [{name: 'دسته'}];

  constructor() { }

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

}
