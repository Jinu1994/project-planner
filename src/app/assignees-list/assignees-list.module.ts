import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssigneesListRoutingModule } from './assignees-list-routing.module';
import { AssigneesListComponent } from './assignees-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [AssigneesListComponent],
  imports: [
    CommonModule,
    AssigneesListRoutingModule,
    MatTableModule
  ]
})
export class AssigneesListModule { }
