import { TestBed } from '@angular/core/testing';

import { SportsEquipmentService } from './sports-equipment.service';

describe('SportsEquipmentService', () => {
  let service: SportsEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
