import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WarrantiesListComponent} from './warranties-list/warranties-list.component';
import {WarrantiesInsertComponent} from './warranties-insert/warranties-insert.component';
import {WarrantiesHomeComponent} from './warranties-home/warranties-home.component';
import {WarrantiesEditComponent} from './warranties-edit/warranties-edit.component';



const routes: Routes = [
  { path: 'warranties', component: WarrantiesHomeComponent,
    children: [
      { path: '', component: WarrantiesListComponent},
      { path: 'Insert', component: WarrantiesInsertComponent},
      { path: 'edit', component: WarrantiesEditComponent}]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class WarrantiesRoutingModule { }
