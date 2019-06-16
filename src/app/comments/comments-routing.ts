import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CommentsListComponent} from './comments-list/comments-list.component';



const routes: Routes = [
  { path: 'comments', component: CommentsListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
