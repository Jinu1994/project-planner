import { TestBed } from '@angular/core/testing';

import { AssigneesService} from '../shared-services/assignees/assignees-service';

describe('AssigneeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssigneesService = TestBed.get(AssigneesService);
    expect(service).toBeTruthy();
  });
});
