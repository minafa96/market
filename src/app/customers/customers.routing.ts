import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomersListComponent} from './customers-list/customers-list.component';
import {CustomersInsertComponent} from './customers-insert/customers-insert.component';
import {CustomersEditComponent} from './customers-edit/customers-edit.component';
import {CustomersHomeComponent} from './customers-home/customers-home.component';


const routes: Routes = [
  { path: 'customers', component: CustomersHomeComponent,
  children: [
    { path: '', component: CustomersListComponent},
    { path: 'insert', component: CustomersInsertComponent},
    { path: 'edit', component: CustomersEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
