import { TestBed } from '@angular/core/testing';

import { DataReaderService } from './data-reader.service';

describe('DataReaderService', () => {
  let service: DataReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
