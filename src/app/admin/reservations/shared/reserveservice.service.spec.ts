import { TestBed, inject } from '@angular/core/testing';

import { ReserveserviceService } from './reserveservice.service';

describe('ReserveserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReserveserviceService]
    });
  });

  it('should be created', inject([ReserveserviceService], (service: ReserveserviceService) => {
    expect(service).toBeTruthy();
  }));
});
