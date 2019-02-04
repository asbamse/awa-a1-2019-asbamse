import { TestBed } from '@angular/core/testing';

import { AddMessageService } from './add-message.service';

describe('AddMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMessageService = TestBed.get(AddMessageService);
    expect(service).toBeTruthy();
  });
});
