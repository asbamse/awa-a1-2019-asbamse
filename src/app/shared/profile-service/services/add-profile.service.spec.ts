import { TestBed } from '@angular/core/testing';

import { AddProfileService } from './add-profile.service';

describe('AddProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProfileService = TestBed.get(AddProfileService);
    expect(service).toBeTruthy();
  });
});
