import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesListRoutingModule } from './issues-list-routing.module'
import { IssuesListComponent } from './issues-list.component'

@NgModule({
  declarations: [
    IssuesListComponent
  ],
  imports: [
    CommonModule,
    IssuesListRoutingModule
  ]
})
export class IssuesListModule { }
