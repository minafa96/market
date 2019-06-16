import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BannersListComponent} from './banners-list/banners-list.component';
import {BannersInsertComponent} from './banners-insert/banners-insert.component';
import {BannersEditComponent} from './banners-edit/banners-edit.component';
import {BannersHomeComponent} from './banners-home/banners-home.component';

const routes: Routes = [
  { path: 'banners', component: BannersHomeComponent,
  children: [
    { path: '', component: BannersListComponent},
    { path: 'insert', component: BannersInsertComponent},
    { path: 'edit', component: BannersEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BannersRoutingModule { }
