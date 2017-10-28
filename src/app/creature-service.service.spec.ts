import { TestBed, inject } from '@angular/core/testing';

import { CreatureServiceService } from './creature-service.service';

describe('CreatureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatureServiceService]
    });
  });

  it('should be created', inject([CreatureServiceService], (service: CreatureServiceService) => {
    expect(service).toBeTruthy();
  }));
});
