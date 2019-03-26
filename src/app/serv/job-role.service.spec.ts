import { TestBed } from '@angular/core/testing';

import { JobRoleService } from './job-role.service';

describe('JobRoleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobRoleService = TestBed.get(JobRoleService);
    expect(service).toBeTruthy();
  });
});
