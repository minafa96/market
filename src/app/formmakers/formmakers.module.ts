import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormmakersListComponent } from './formmakers-list/formmakers-list.component';
import { FormmakersInsertComponent } from './formmakers-insert/formmakers-insert.component';
import {FormmakersRoutingModule} from './formmakers-routing';
import { FormmakersEditComponent } from './formmakers-edit/formmakers-edit.component';
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
import { FormmakersHomeComponent } from './formmakers-home/formmakers-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormmakersRoutingModule,
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
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [FormmakersListComponent, FormmakersInsertComponent, FormmakersEditComponent, FormmakersHomeComponent]
})
export class FormmakersModule { }
