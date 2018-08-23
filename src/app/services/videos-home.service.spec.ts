import { TestBed, inject } from '@angular/core/testing';

import { VideosHomeService } from './videos-home.service';

describe('VideosHomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideosHomeService]
    });
  });

  it('should be created', inject([VideosHomeService], (service: VideosHomeService) => {
    expect(service).toBeTruthy();
  }));
});
