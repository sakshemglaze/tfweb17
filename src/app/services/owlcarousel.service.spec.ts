import { TestBed } from '@angular/core/testing';

import { OwlcarouselService } from './owlcarousel.service';

describe('OwlcarouselService', () => {
  let service: OwlcarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwlcarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
