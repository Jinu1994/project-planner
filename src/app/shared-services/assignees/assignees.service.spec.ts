import { TestBed } from '@angular/core/testing';

import { AssigneesService } from './assignees.service';

describe('AssigneesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssigneesService = TestBed.get(AssigneesService);
    expect(service).toBeTruthy();
  });
});
