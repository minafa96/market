import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Router} from '@angular/router';
import {MatChipInputEvent} from '@angular/material';

export interface Keywords {
  name: string;
}
@Component({
  selector: 'app-contact-us-edit',
  templateUrl: './contact-us-edit.component.html',
  styleUrls: ['./contact-us-edit.component.css']
})
export class ContactUsEditComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords: Keywords[] = [{name: 'تماس-با-ما'}];

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

  onCancel() {
    console.log('cancel');
    this.router.navigate(['/contact/']);
  }
}
