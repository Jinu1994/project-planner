import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-plan',
  templateUrl: './team-plan.component.html',
  styleUrls: ['./team-plan.component.sass']
})
export class TeamPlanComponent implements OnInit {
  @Input() id: number;
  @Input() sprint: number;
  constructor() { }

  ngOnInit() {
  }

}
