import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductsInsertComponent} from './products-insert/products-insert.component';
import {ProductsEditComponent} from './products-edit/products-edit.component';
import {ProductsHomeComponent} from './products-home/products-home.component';


const routes: Routes = [
  { path: 'products', component: ProductsHomeComponent,
  children: [
    { path: '', component: ProductsListComponent},
    { path: 'insert', component: ProductsInsertComponent},
    { path: 'edit', component: ProductsEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
