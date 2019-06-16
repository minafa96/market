import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CardsHomeComponent} from './cards-home/cards-home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {OriginalWarrantyComponent} from './original-warranty/original-warranty.component';
import {PayComponent} from './pay/pay.component';
import {RulesComponent} from './rules/rules.component';
import {SupportComponent} from './support/support.component';
import {WarrantyComponent} from './warranty/warranty.component';
import {AboutUsEditComponent} from './about-us/about-us-edit/about-us-edit.component';
import {AboutUsContentComponent} from './about-us/about-us-content/about-us-content.component';
import {ContactUsEditComponent} from './contact-us/contact-us-edit/contact-us-edit.component';
import {ContactUsContentComponent} from './contact-us/contact-us-content/contact-us-content.component';
import {OrgWarrantyContentComponent} from './original-warranty/org-warranty-content/org-warranty-content.component';
import {OrgWarrantyEditComponent} from './original-warranty/org-warranty-edit/org-warranty-edit.component';
import {PayContentComponent} from './pay/pay-content/pay-content.component';
import {PayEditComponent} from './pay/pay-edit/pay-edit.component';
import {RulesContentComponent} from './rules/rules-content/rules-content.component';
import {RulesEditComponent} from './rules/rules-edit/rules-edit.component';
import {SupportContentComponent} from './support/support-content/support-content.component';
import {SupportEditComponent} from './support/support-edit/support-edit.component';
import {WarrantyContentComponent} from './warranty/warranty-content/warranty-content.component';
import {WarrantyEditComponent} from './warranty/warranty-edit/warranty-edit.component';


const routes: Routes = [
    { path: 'cards', component: CardsHomeComponent},
    { path: 'about', component: AboutUsComponent,
    children: [
      {path: '', component: AboutUsContentComponent},
      {path: 'about-edit', component: AboutUsEditComponent}
    ]},
    { path: 'contact', component: ContactUsComponent,
      children: [
        {path: '', component: ContactUsContentComponent},
        {path: 'contact-edit', component: ContactUsEditComponent}
      ]},
    { path: 'org-warranty', component: OriginalWarrantyComponent,
      children: [
        {path: '', component: OrgWarrantyContentComponent},
        {path: 'org-warranty-edit', component: OrgWarrantyEditComponent}
      ]},
    { path: 'pay', component: PayComponent,
      children: [
        {path: '', component: PayContentComponent},
        {path: 'pay-edit', component: PayEditComponent}
      ]},
    { path: 'rules', component: RulesComponent,
      children: [
        {path: '', component: RulesContentComponent},
        {path: 'rules-edit', component: RulesEditComponent}
      ]},
    { path: 'support', component: SupportComponent,
      children: [
        {path: '', component: SupportContentComponent},
        {path: 'support-edit', component: SupportEditComponent}
      ]},
    { path: 'warranty', component: WarrantyComponent,
      children: [
        {path: '', component: WarrantyContentComponent},
        {path: 'warranty-edit', component: WarrantyEditComponent}
      ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
