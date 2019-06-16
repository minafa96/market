import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PartsListComponent} from './parts-list/parts-list.component';
import {PartsInsertComponent} from './parts-insert/parts-insert.component';
import {PartsEditComponent} from './parts-edit/parts-edit.component';
import {PartsHomeComponent} from './parts-home/parts-home.component';


const routes: Routes = [
  { path: 'parts', component: PartsHomeComponent,
  children: [
    { path: '', component: PartsListComponent},
    { path: 'insert', component: PartsInsertComponent},
    { path: 'edit', component: PartsEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PartsRoutingModule { }
