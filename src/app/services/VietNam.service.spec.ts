/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VietNamService } from './VietNam.service';

describe('Service: VietNam', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VietNamService]
    });
  });

  it('should ...', inject([VietNamService], (service: VietNamService) => {
    expect(service).toBeTruthy();
  }));
});
