import { TestBed } from '@angular/core/testing';

import { PlanetDataService } from './planet-data.service';

describe('PlanetDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetDataService = TestBed.get(PlanetDataService);
    expect(service).toBeTruthy();
  });
});
