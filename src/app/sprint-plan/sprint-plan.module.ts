import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintPlanRoutingModule } from './sprint-plan-routing.module';
import { SprintPlanComponent } from './sprint-plan.component';

@NgModule({
  declarations: [SprintPlanComponent],
  imports: [
    CommonModule,
    SprintPlanRoutingModule
  ]
})
export class SprintPlanModule { }
