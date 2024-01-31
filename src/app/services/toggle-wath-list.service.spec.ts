import { TestBed } from '@angular/core/testing';

import { ToggleWatchListService } from './toggle-wath-list.service';

describe('ToggleWathListService', () => {
  let service: ToggleWatchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleWatchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
