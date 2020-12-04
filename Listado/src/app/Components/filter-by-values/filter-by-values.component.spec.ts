import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FilterByValuesComponent } from './filter-by-values.component';
import { DataReaderService } from 'src/Shared/Services/data-reader.service';

describe('FilterByValuesComponent', () => {
  let component: FilterByValuesComponent;
  let service: DataReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FilterByValuesComponent]
    });
    service = TestBed.inject(DataReaderService);
    component = TestBed.inject(FilterByValuesComponent);
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
