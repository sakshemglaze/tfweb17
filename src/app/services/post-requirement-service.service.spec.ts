import { TestBed } from '@angular/core/testing';

import { PostRequirementServiceService } from './post-requirement-service.service';

describe('PostRequirementServiceService', () => {
  let service: PostRequirementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRequirementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
