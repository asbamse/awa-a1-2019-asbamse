import { TestBed } from '@angular/core/testing';

import { GetProfileService } from './get-profile.service';

describe('GetProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProfileService = TestBed.get(GetProfileService);
    expect(service).toBeTruthy();
  });
});
