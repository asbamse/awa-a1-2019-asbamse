import { TestBed } from '@angular/core/testing';

import { ValidateMessageService } from './validate-message.service';

describe('ValidateMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateMessageService = TestBed.get(ValidateMessageService);
    expect(service).toBeTruthy();
  });
});
