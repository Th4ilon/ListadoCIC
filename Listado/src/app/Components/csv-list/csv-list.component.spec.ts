import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { CsvListComponent } from './csv-list.component';
import { DataReaderService } from 'src/Shared/Services/data-reader.service';

describe('CsvListComponent', () => {
  let component: CsvListComponent;
  let service: DataReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CsvListComponent]
    });
    service = TestBed.inject(DataReaderService);
    component = TestBed.inject(CsvListComponent);
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
