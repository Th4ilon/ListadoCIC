import { Component, OnInit } from '@angular/core';
// Services
import { DataReaderService } from '../../../Services/data-reader.service';

@Component({
  selector: 'app-csv-list',
  templateUrl: './csv-list.component.html',
  styleUrls: ['./csv-list.component.sass']
})
export class CsvListComponent implements OnInit {
  values: any[];
  constructor(private csvData: DataReaderService) { }

  ngOnInit(): void {
     this.values = this.csvData.getCsvData();
  }

}
