import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';
import { Issue } from './issue.model';
import { SprintService } from '../shared/sprint.service';
import { Sprint } from '../shared/sprint.model';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.sass']
})
export class IssuesListComponent implements OnInit {
  issues: Issue[];
  sprints: Sprint[];
  selectedSprintId: number;
  columns = ['summary', 'sprint', 'status'];
  constructor(private issuesService: IssuesService, private sprintService: SprintService) { }

  async ngOnInit() {
    await this.getSprints();
    this.selectedSprintId = 95;
    this.getIssues();
  }
  async getIssues() {
    return await this.issuesService.getIssues(this.selectedSprintId).subscribe(issues => this.issues = issues);
  }
  async getSprints() {
    return await this.sprintService.getSprints().subscribe(sprints => this.sprints = sprints);
  }
}
