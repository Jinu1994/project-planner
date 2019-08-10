import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SprintPlanComponent } from './sprint-plan.component';

const routes: Routes = [{
  path: 'sprint-plan',
  component: SprintPlanComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprintPlanRoutingModule { }
