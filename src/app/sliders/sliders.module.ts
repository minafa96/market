import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidersListComponent } from './sliders-list/sliders-list.component';
import { SlidersInsertComponent } from './sliders-insert/sliders-insert.component';
import {SlidersRoutingModule} from './sliders-routing';
import { SlidersEditComponent } from './sliders-edit/sliders-edit.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatSelectModule, MatSlideToggleModule, MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SlidersHomeComponent } from './sliders-home/sliders-home.component';

@NgModule({
  imports: [
    CommonModule,
    SlidersRoutingModule,
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
  declarations: [SlidersListComponent, SlidersInsertComponent, SlidersEditComponent, SlidersHomeComponent]
})
export class SlidersModule { }
