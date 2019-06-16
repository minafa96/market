import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartsListComponent } from './parts-list/parts-list.component';
import { PartsInsertComponent } from './parts-insert/parts-insert.component';
import {PartsRoutingModule} from './parts-routing';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PartsEditComponent } from './parts-edit/parts-edit.component';
import { PartsHomeComponent } from './parts-home/parts-home.component';

@NgModule({
  imports: [
    CommonModule,
    PartsRoutingModule,
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
    MatChipsModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  declarations: [PartsListComponent, PartsInsertComponent, PartsEditComponent, PartsHomeComponent]
})
export class PartsModule { }
