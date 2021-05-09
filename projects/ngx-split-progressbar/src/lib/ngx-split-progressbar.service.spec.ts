import { TestBed } from '@angular/core/testing';

import { NgxSplitProgressbarService } from './ngx-split-progressbar.service';

describe('NgxSplitProgressbarService', () => {
  let service: NgxSplitProgressbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSplitProgressbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
