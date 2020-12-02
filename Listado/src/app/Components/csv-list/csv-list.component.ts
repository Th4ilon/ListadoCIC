import { Component, OnInit } from '@angular/core';

// Services
import { DataReaderService } from '../../../Shared/Services/data-reader.service';
// Models
import { ListItem } from '../../../Shared/Models/ListItemModel';
// Assets
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-csv-list',
  templateUrl: './csv-list.component.html',
  styleUrls: ['./csv-list.component.scss']
})
export class CsvListComponent implements OnInit {

  sortedValues: ListItem[];

  constructor(private csvData: DataReaderService) { }

  ngOnInit(): void {
     this.sortedValues = this.csvData.getCsvData(); // TODO Loading pipe or interceptor?
  }


  sortData(sort: Sort): any {
    if (!sort.active || sort.direction === '') {
      this.sortedValues = this.sortedValues.slice();
      return;
    }

    this.sortedValues = this.sortedValues.slice().sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        case 'value': return compare(a.value, b.value, isAsc);
        case 'state': return compare(a.state, b.state, isAsc);
        case 'stateDetail': return compare(a.stateDetail, b.stateDetail, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean): any {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
