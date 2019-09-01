import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { TeamService } from '@app/shared-services/teams/team.service';
import { Sprint } from '@app/models/sprint.model';
import { IssuesService } from '@app/shared-services/issues/issues.service';
import { SprintService } from '@app/shared-services/sprints/sprint.service';

@Component({
  selector: 'app-sprint-plan',
  templateUrl: './sprint-plan.component.html',
  styleUrls: ['./sprint-plan.component.sass']
})
export class SprintPlanComponent implements OnInit {
  teams: Team[];
  sprints: Sprint[];
  selectedSprintId: number;
  constructor(private teamService: TeamService, private sprintService: SprintService) { }

  async ngOnInit() {
    await this.getSprints();
    this.selectedSprintId = 95;
    this.getTeams();
  }
  async getSprints() {
    return await this.sprintService.getSprints().subscribe(sprints => this.sprints = sprints);
  }
  getTeams() {
    this.teamService.getTeams().subscribe(teams => this.teams = teams);
  }
}
