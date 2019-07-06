import { TestBed } from '@angular/core/testing';

import { Storieservice } from './story.service';

describe('Storieservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Storieservice = TestBed.get(Storieservice);
    expect(service).toBeTruthy();
  });
});
