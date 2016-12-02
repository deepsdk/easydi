/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeepapiService } from './deepapi.service';

describe('DeepapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeepapiService]
    });
  });

  it('should ...', inject([DeepapiService], (service: DeepapiService) => {
    expect(service).toBeTruthy();
  }));
});
