import { TestBed } from '@angular/core/testing';

import { MyTicketService } from './my-ticket.service';

describe('MyTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyTicketService = TestBed.get(MyTicketService);
    expect(service).toBeTruthy();
  });
});
