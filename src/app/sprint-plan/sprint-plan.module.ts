import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintPlanRoutingModule } from './sprint-plan-routing.module';
import { SprintPlanComponent } from './sprint-plan.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TeamPlanComponent } from './components/team-plan/team-plan.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [SprintPlanComponent, TeamPlanComponent],
  imports: [
    CommonModule,
    SprintPlanRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SprintPlanModule { }
