import { TestBed } from '@angular/core/testing';

import { DeptDivisionService } from './dept-division.service';

describe('DeptDivisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeptDivisionService = TestBed.get(DeptDivisionService);
    expect(service).toBeTruthy();
  });
});
