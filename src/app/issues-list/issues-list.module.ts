import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesListRoutingModule } from './issues-list-routing.module'
import { IssuesListComponent } from './issues-list.component'
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [
    IssuesListComponent
  ],
  imports: [
    CommonModule,
    IssuesListRoutingModule,
    MatListModule
  ]
})
export class IssuesListModule { }
