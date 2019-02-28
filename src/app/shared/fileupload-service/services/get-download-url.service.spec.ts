import { TestBed } from '@angular/core/testing';

import { GetDownloadUrlService } from './get-download-url.service';

describe('GetDownloadUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDownloadUrlService = TestBed.get(GetDownloadUrlService);
    expect(service).toBeTruthy();
  });
});
