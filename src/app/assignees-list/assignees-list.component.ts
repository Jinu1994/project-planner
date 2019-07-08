import { Component, OnInit } from '@angular/core';
import { Assignee } from './assignee.model';
import { AssigneesService } from './assignees-service';

@Component({
  selector: 'app-assignees-list',
  templateUrl: './assignees-list.component.html',
  styleUrls: ['./assignees-list.component.sass']
})
export class AssigneesListComponent implements OnInit {
  assignees: Assignee[];
  columns = ['name', 'role', 'shortName'];
  constructor(private assigneeService: AssigneesService) { }

  ngOnInit() {
    this.getAssignees();
  }

  async getAssignees() {
    return await this.assigneeService.getAssignees().subscribe(assignees => this.assignees = assignees);
  }

}
