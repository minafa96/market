import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { SendWaysComponent } from './send-ways/send-ways.component';
import {SalesRoutingModule} from './sales-routing';
import { DiscountsListComponent } from './discounts/discounts-list/discounts-list.component';
import { DiscountsInsertComponent } from './discounts/discounts-insert/discounts-insert.component';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule, MatSlideToggleModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { DiscountsEditComponent } from './discounts/discounts-edit/discounts-edit.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { OrdersInsertComponent } from './orders/orders-insert/orders-insert.component';
import { OrdersEditComponent } from './orders/orders-edit/orders-edit.component';
import { SendWaysListComponent } from './send-ways/send-ways-list/send-ways-list.component';
import { SendWaysInsertComponent } from './send-ways/send-ways-insert/send-ways-insert.component';
import { SendWaysEditComponent } from './send-ways/send-ways-edit/send-ways-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatChipsModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  declarations: [OrdersComponent, DiscountsComponent, SendWaysComponent, DiscountsListComponent,
    DiscountsInsertComponent, DiscountsEditComponent, OrdersListComponent, OrdersInsertComponent,
    OrdersEditComponent, SendWaysListComponent, SendWaysInsertComponent, SendWaysEditComponent]
})
export class SalesModule { }
