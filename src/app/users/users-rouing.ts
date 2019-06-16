import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UsersInsertComponent} from './users-insert/users-insert.component';
import {UsersEditComponent} from './users-edit/users-edit.component';
import {UsersHomeComponent} from './users-home/users-home.component';



const routes: Routes = [
  { path: 'users', component: UsersHomeComponent,
  children: [
    { path: '', component: UsersListComponent},
    { path: 'insert', component: UsersInsertComponent},
    { path: 'edit', component: UsersEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
