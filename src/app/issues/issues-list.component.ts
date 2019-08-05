import { Component, OnInit } from '@angular/core';
import { IssuesService } from './issues.service';
import { Issue } from './issue.model';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.sass']
})
export class IssuesListComponent implements OnInit {
  issues: Issue[];
  columns = ['id', 'summary', 'key', 'status'];
  constructor(private issuesService: IssuesService) { }

  ngOnInit() {
    this.getIssues();
  }
  async getIssues() {
    return await this.issuesService.getIssues().subscribe(issues => this.issues = issues);
  }
}
