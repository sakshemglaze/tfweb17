import { TestBed } from '@angular/core/testing';

import { SellerUtilsService } from './seller-utils.service';

describe('SellerUtilsService', () => {
  let service: SellerUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
