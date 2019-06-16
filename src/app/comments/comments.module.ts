import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './comments-list/comments-list.component';
import {CommentsRoutingModule} from './comments-routing';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ResponseComponent} from './response/response.component';

@NgModule({
  imports: [
    CommonModule,
    CommentsRoutingModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule
  ],
  declarations: [CommentsListComponent, ResponseComponent],
  entryComponents: [ResponseComponent]
})
export class CommentsModule { }
