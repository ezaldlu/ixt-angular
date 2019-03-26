import { TestBed } from '@angular/core/testing';

import { ReportTechnicianService } from './report-technician.service';

describe('ReportTechnicianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportTechnicianService = TestBed.get(ReportTechnicianService);
    expect(service).toBeTruthy();
  });
});
