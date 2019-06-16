import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatSelectModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { ProductsListComponent } from './products-list/products-list.component';
import {ProductsRoutingModule} from './products-routing';
import { ProductsInsertComponent } from './products-insert/products-insert.component';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ChangeSupplyComponent } from './change-supply/change-supply.component';
import { ProductsHomeComponent } from './products-home/products-home.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  declarations: [ ProductsListComponent, ProductsInsertComponent, ProductsEditComponent, ChangeSupplyComponent, ProductsHomeComponent],
  entryComponents: [ChangeSupplyComponent]
})
export class ProductsModule { }
