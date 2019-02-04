import { TestBed } from '@angular/core/testing';

import { UpdateMessageService } from './update-message.service';

describe('UpdateMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateMessageService = TestBed.get(UpdateMessageService);
    expect(service).toBeTruthy();
  });
});
