import { TestBed } from '@angular/core/testing';

import { DeleteMessageService } from './delete-message.service';

describe('DeleteMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteMessageService = TestBed.get(DeleteMessageService);
    expect(service).toBeTruthy();
  });
});
