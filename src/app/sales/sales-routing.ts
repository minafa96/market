import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {SendWaysComponent} from './send-ways/send-ways.component';
import {DiscountsListComponent} from './discounts/discounts-list/discounts-list.component';
import {DiscountsInsertComponent} from './discounts/discounts-insert/discounts-insert.component';
import {DiscountsEditComponent} from './discounts/discounts-edit/discounts-edit.component';
import {OrdersListComponent} from './orders/orders-list/orders-list.component';
import {OrdersInsertComponent} from './orders/orders-insert/orders-insert.component';
import {OrdersEditComponent} from './orders/orders-edit/orders-edit.component';
import {SendWaysListComponent} from './send-ways/send-ways-list/send-ways-list.component';
import {SendWaysInsertComponent} from './send-ways/send-ways-insert/send-ways-insert.component';
import {SendWaysEditComponent} from './send-ways/send-ways-edit/send-ways-edit.component';



const routes: Routes = [
  { path: 'orders', component: OrdersComponent,
    children: [
      {
        path: '',
        component: OrdersListComponent
      },
      {
        path: 'insert',
        component: OrdersInsertComponent
      },
      {
        path: 'edit',
        component: OrdersEditComponent
      }]
  },
  { path: 'discounts', component: DiscountsComponent,
    children: [
      {
        path: '',
        component: DiscountsListComponent
      },
      {
        path: 'insert',
        component: DiscountsInsertComponent
      },
      {
        path: 'edit',
        component: DiscountsEditComponent
      }]
  },
  { path: 'send-ways', component: SendWaysComponent,
    children: [
      {
        path: '',
        component: SendWaysListComponent
      },
      {
        path: 'insert',
        component: SendWaysInsertComponent
      },
      {
        path: 'edit',
        component: SendWaysEditComponent
      }]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
