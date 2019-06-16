import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../core/main/main.component';
import {AuthGuardService} from '../tools/services/auth-guard.service';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
  path: '', canActivate: [AuthGuardService] , component: MainComponent,
  children: [

    {
      path: '',
      loadChildren: './../products/products.module#ProductsModule'
    },
    {
      path: '',
      loadChildren: './../users/users.module#UsersModule'
    },
    {
      path: '',
      loadChildren: './../sales/sales.module#SalesModule'
    },
    {
      path: '',
      loadChildren: './../banners/banners.module#BannersModule'
    },
    {
      path: '',
      loadChildren: './../cards/cards.module#CardsModule'
    },
    {
      path: '',
      loadChildren: './../customers/customers.module#CustomersModule'
    },
    {
      path: '',
      loadChildren: './../formmakers/formmakers.module#FormmakersModule'
    },
    {
      path: '',
      loadChildren: './../comments/comments.module#CommentsModule'
    },
    {
      path: '',
      loadChildren: './../parts/parts.module#PartsModule'
    },
    {
      path: '',
      loadChildren: './../sliders/sliders.module#SlidersModule'
    },
    {
      path: '',
      loadChildren: './../warranties/warranties.module#WarrantiesModule'
    }
  ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
