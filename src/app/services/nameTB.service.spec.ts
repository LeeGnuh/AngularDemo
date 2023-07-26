/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NameTBService } from './nameTB.service';

describe('Service: NameTB', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NameTBService]
    });
  });

  it('should ...', inject([NameTBService], (service: NameTBService) => {
    expect(service).toBeTruthy();
  }));
});
