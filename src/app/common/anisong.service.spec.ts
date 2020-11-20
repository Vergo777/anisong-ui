import { TestBed } from '@angular/core/testing';

import { AnisongService } from './anisong.service';

describe('AnisongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnisongService = TestBed.get(AnisongService);
    expect(service).toBeTruthy();
  });
});
