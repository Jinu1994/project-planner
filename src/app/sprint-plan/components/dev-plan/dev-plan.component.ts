import { Component, OnInit, Input } from '@angular/core';
import { Assignee } from '@app/models/assignee.model';

@Component({
  selector: 'app-dev-plan',
  templateUrl: './dev-plan.component.html',
  styleUrls: ['./dev-plan.component.sass']
})
export class DevPlanComponent implements OnInit {
  @Input() developer: Assignee;
  constructor() { }

  ngOnInit() {
  }

}
