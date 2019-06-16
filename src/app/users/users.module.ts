import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersInsertComponent } from './users-insert/users-insert.component';
import {UsersRoutingModule} from './users-rouing';
import { UsersEditComponent } from './users-edit/users-edit.component';
import {
  MatButtonModule,
  MatCardModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UsersHomeComponent } from './users-home/users-home.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  declarations: [ UsersListComponent, UsersInsertComponent, UsersEditComponent, UsersHomeComponent]
})
export class UsersModule { }
