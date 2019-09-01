import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprintPlanRoutingModule } from './sprint-plan-routing.module';
import { SprintPlanComponent } from './sprint-plan.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TeamPlanComponent } from './components/team-plan/team-plan.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatGridListModule, MatIconModule } from '@angular/material';
import { DevPlanComponent } from './components/dev-plan/dev-plan.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SprintPlanComponent, TeamPlanComponent, DevPlanComponent],
  imports: [
    CommonModule,
    SprintPlanRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class SprintPlanModule { }
