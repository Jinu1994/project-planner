import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesListRoutingModule } from './stories-list-routing.module';
import { StoriesListComponent } from './stories-list.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    StoriesListComponent
  ],
  imports: [
    CommonModule,
    StoriesListRoutingModule,
    MatListModule
  ]
})
export class StoriesListModule { }
