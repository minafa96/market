import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SlidersListComponent} from './sliders-list/sliders-list.component';
import {SlidersInsertComponent} from './sliders-insert/sliders-insert.component';
import {SlidersEditComponent} from './sliders-edit/sliders-edit.component';
import {SlidersHomeComponent} from './sliders-home/sliders-home.component';



const routes: Routes = [
  { path: 'sliders', component: SlidersHomeComponent,
  children: [
    { path: '', component: SlidersListComponent},
    { path: 'insert', component: SlidersInsertComponent},
    { path: 'edit', component: SlidersEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class SlidersRoutingModule { }
