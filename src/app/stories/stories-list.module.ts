import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListRoutingModule } from './stories-list-routing.module';
import { StoriesListComponent } from './stories-list.component';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    StoriesListComponent
  ],
  imports: [
    CommonModule,
    StoriesListRoutingModule,
    MatListModule,
    MatTableModule
  ]
})
export class StoriesListModule { }
