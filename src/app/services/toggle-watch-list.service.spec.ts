import { TestBed } from '@angular/core/testing';

import { ToggleWatchListService } from './toggle-watch-list.service';

describe('ToggleWatchListService', () => {
  let service: ToggleWatchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleWatchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
