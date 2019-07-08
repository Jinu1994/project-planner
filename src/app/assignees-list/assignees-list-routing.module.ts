import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssigneesListComponent } from './assignees-list.component';

const routes: Routes = [{
  path: 'assignees',
  component: AssigneesListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssigneesListRoutingModule { }
