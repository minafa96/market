import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarrantiesHomeComponent } from './warranties-home/warranties-home.component';
import { WarrantiesListComponent } from './warranties-list/warranties-list.component';
import { WarrantiesInsertComponent } from './warranties-insert/warranties-insert.component';
import {WarrantiesRoutingModule} from './warranties-routing';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSlideToggleModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { WarrantiesEditComponent } from './warranties-edit/warranties-edit.component';

@NgModule({
  imports: [
    CommonModule,
    WarrantiesRoutingModule,
    MatToolbarModule,
    MatTabsModule,
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
    MatTooltipModule
  ],
  declarations: [WarrantiesHomeComponent, WarrantiesListComponent, WarrantiesInsertComponent, WarrantiesEditComponent]
})
export class WarrantiesModule { }
