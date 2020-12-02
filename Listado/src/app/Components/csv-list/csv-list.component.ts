import { Component, OnInit } from '@angular/core';
// Services
import { DataReaderService } from '../../../Shared/Services/data-reader.service';
// Models
import { ListItem } from '../../../Shared/Models/ListItemModel';

@Component({
  selector: 'app-csv-list',
  templateUrl: './csv-list.component.html',
  styleUrls: ['./csv-list.component.sass']
})
export class CsvListComponent implements OnInit {
  values: ListItem[];
  constructor(private csvData: DataReaderService) { }

  ngOnInit(): void {
     this.values = this.csvData.getCsvData(); // TODO Loading pipe or interceptor?
  }


  /*oderByDate(): void{
    this.values.forEach(data => {
      console.log(data.date);
      data.date = data.date.filter((item: any) => {
          item.date.getTime() >= fromDate.getTime() &&
          item.date.getTime() <= toDate.getTime();
      });
  });
  }*/
}
