import { TestBed } from '@angular/core/testing';

import { WheatherMapService } from './wheather-map.service';

describe('WheatherMapService', () => {
  let service: WheatherMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatherMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
