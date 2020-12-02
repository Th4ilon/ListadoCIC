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

  dataSource: ListItem[] = [];
  start = 7;
  limit = 20;
  end: number = this.limit + this.start;

  constructor(private csvData: DataReaderService) { }

  ngOnInit(): void {
    this.readCsvData(this.start, this.end); // TODO Loading pipe or interceptor?
    this.updateIndex();
  }

  // Private Functions
   private readCsvData(start, end): void{
    this.csvData.getCsvData().subscribe(
      data => {
          const csvToRowArray = data.split('\n');
          if (end <= csvToRowArray.length){
            for (let index = start; index < end; index++) {
              const row = csvToRowArray[index].split(';');
              const currentDate = this.createDateType(row[0]);
              this.dataSource.push(new ListItem(currentDate, parseInt( row[1], 10), parseInt( row[2], 2), row[3]));
            }
          }
      },
      error => {
          console.log(error);
      }
    );
   }

   private createDateType(dates: string): Date{
    const currentDate = dates.substring(0, 10).split('/');
    const currentTime = dates.substring(11, 19).split(':');
    const dateObject = new Date(
      +currentDate[2],
      +currentDate[1] - 1,
      +currentDate[0],
      +currentTime[0],
      +currentTime[1],
      +currentTime[2]);

    return dateObject;
  }

  private updateIndex(): void {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  // Public Functions
  onTableScroll(event): void {
    const tableViewHeight = event.target.offsetHeight; // viewport
    const tableScrollHeight = event.target.scrollHeight; // length of all table
    const scrollLocation = event.target.scrollTop; // how far user scrolled
    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
       this.readCsvData(this.start, this.end);
       this.updateIndex();
    }
  }
  sortData(sort: Sort): any {
    if (!sort.active || sort.direction === '') {
      this.dataSource = this.dataSource .slice();
      return;
    }

    this.dataSource = this.dataSource.slice().sort((a, b) => {
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
// TODO:  MAKE IT AS AN EXPORTED FUNCTION.
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean): any {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
