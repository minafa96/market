import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormmakersListComponent} from './formmakers-list/formmakers-list.component';
import {FormmakersInsertComponent} from './formmakers-insert/formmakers-insert.component';
import {FormmakersEditComponent} from './formmakers-edit/formmakers-edit.component';
import {FormmakersHomeComponent} from './formmakers-home/formmakers-home.component';


const routes: Routes = [
  { path: 'formmakers', component: FormmakersHomeComponent,
  children: [
    { path: '', component: FormmakersListComponent},
    { path: 'insert', component: FormmakersInsertComponent},
    { path: 'edit', component: FormmakersEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class FormmakersRoutingModule { }
