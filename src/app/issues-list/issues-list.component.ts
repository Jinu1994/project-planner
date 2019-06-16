import { Component, OnInit } from '@angular/core';
import { IssueService } from '../shared/issue.service'
import { Issue } from '../shared/issue';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.sass']
})
export class IssuesListComponent implements OnInit {
  issues: Issue[]
  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getHeroes();
  }
  async getHeroes() {
    return await this.issueService.getIssues().subscribe(issues => this.issues = issues);
  }
}
