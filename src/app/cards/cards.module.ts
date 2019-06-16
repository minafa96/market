import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsRoutingModule} from './cards-routing';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule, MatSlideToggleModule, MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RulesComponent } from './rules/rules.component';
import { OriginalWarrantyComponent } from './original-warranty/original-warranty.component';
import { WarrantyComponent } from './warranty/warranty.component';
import { PayComponent } from './pay/pay.component';
import { SupportComponent } from './support/support.component';
import { CardsHomeComponent } from './cards-home/cards-home.component';
import { AboutUsEditComponent } from './about-us/about-us-edit/about-us-edit.component';
import { AboutUsContentComponent } from './about-us/about-us-content/about-us-content.component';
import { ContactUsContentComponent } from './contact-us/contact-us-content/contact-us-content.component';
import { ContactUsEditComponent } from './contact-us/contact-us-edit/contact-us-edit.component';
import { OrgWarrantyContentComponent } from './original-warranty/org-warranty-content/org-warranty-content.component';
import { OrgWarrantyEditComponent } from './original-warranty/org-warranty-edit/org-warranty-edit.component';
import { PayContentComponent } from './pay/pay-content/pay-content.component';
import { PayEditComponent } from './pay/pay-edit/pay-edit.component';
import { RulesContentComponent } from './rules/rules-content/rules-content.component';
import { RulesEditComponent } from './rules/rules-edit/rules-edit.component';
import { SupportContentComponent } from './support/support-content/support-content.component';
import { SupportEditComponent } from './support/support-edit/support-edit.component';
import { WarrantyContentComponent } from './warranty/warranty-content/warranty-content.component';
import { WarrantyEditComponent } from './warranty/warranty-edit/warranty-edit.component';

@NgModule({
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatIconModule,
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
    MatTooltipModule,
    MatToolbarModule,
    MatChipsModule
  ],
  declarations: [AboutUsComponent, ContactUsComponent, RulesComponent,
    OriginalWarrantyComponent, WarrantyComponent, PayComponent, SupportComponent,
    CardsHomeComponent, AboutUsEditComponent, AboutUsContentComponent, ContactUsContentComponent,
    ContactUsEditComponent, OrgWarrantyContentComponent, OrgWarrantyEditComponent, PayContentComponent,
    PayEditComponent, RulesContentComponent, RulesEditComponent, SupportContentComponent, SupportEditComponent,
    WarrantyContentComponent, WarrantyEditComponent]
})
export class CardsModule { }
