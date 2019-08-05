import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesListRoutingModule } from './issues-list-routing.module';
import { IssuesListComponent } from './issues-list.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    IssuesListComponent
  ],
  imports: [
    CommonModule,
    IssuesListRoutingModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class IssuesListModule { }
