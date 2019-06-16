import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannersRoutingModule} from './banners-routing';
import { BannersListComponent } from './banners-list/banners-list.component';
import { BannersInsertComponent } from './banners-insert/banners-insert.component';
import { BannersEditComponent } from './banners-edit/banners-edit.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSlideToggleModule, MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BannersHomeComponent } from './banners-home/banners-home.component';

@NgModule({
  imports: [
    CommonModule,
    BannersRoutingModule,
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
    MatToolbarModule
  ],
  declarations: [BannersListComponent, BannersInsertComponent, BannersEditComponent, BannersHomeComponent]
})
export class BannersModule { }
