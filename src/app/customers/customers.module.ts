import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersInsertComponent } from './customers-insert/customers-insert.component';
import {CustomersRoutingModule} from './customers.routing';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {
  MatButtonModule, MatCardModule,
  MatDialogModule, MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTableModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    AngularFontAwesomeModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: [CustomersHomeComponent, CustomersListComponent, CustomersInsertComponent, CustomersEditComponent]
})
export class CustomersModule { }
