import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPlanComponent } from './team-plan.component';

describe('TeamPlanComponent', () => {
  let component: TeamPlanComponent;
  let fixture: ComponentFixture<TeamPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
