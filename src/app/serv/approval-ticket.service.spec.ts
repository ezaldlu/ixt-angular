import { TestBed } from '@angular/core/testing';

import { ApprovalTicketService } from './approval-ticket.service';

describe('ApprovalTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApprovalTicketService = TestBed.get(ApprovalTicketService);
    expect(service).toBeTruthy();
  });
});
