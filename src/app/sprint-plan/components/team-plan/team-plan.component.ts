import { Component, OnInit, Input } from '@angular/core';
import { Assignee } from '@app/models/assignee.model';
import { AssigneesService } from '@app/shared-services/assignees/assignees-service';

@Component({
  selector: 'app-team-plan',
  templateUrl: './team-plan.component.html',
  styleUrls: ['./team-plan.component.sass']
})
export class TeamPlanComponent implements OnInit {
  @Input() id: number;
  @Input() sprint: number;
  developers: Assignee[];
  constructor(private assigneesService: AssigneesService) { }

  ngOnInit() {
    this.getDevelopers();
  }
  getDevelopers() {
    this.assigneesService.getByTeam(this.id, 'developer').subscribe(developers => this.developers = developers);
  }

}
