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
  dataSource: ListItem[];
  filteredList: ListItem[] = [];
  start = 0;
  limit = 20;
  end: number = this.limit + this.start;

  constructor(private csvData: DataReaderService) { }

  async ngOnInit(): Promise<void> {
    this.dataSource = await this.csvData.getCsvData() as ListItem[];
    this.readCsvData(this.start, this.end);
    this.updateIndex();
  }

  /**
   * Listen for any update by the filter component and reset the values for the infinite scroll and the View Model
   */
  emitListener(e): void {
    this.filteredList = [];
    this.dataSource = this.csvData.getFilteredList();
    this.start = 0;
    this.end = this.limit + this.start;
    this.readCsvData(this.start, this.end);
  }

  // PRIVATE FUNCTIONS
  /**
   * Read the extracted data from the csv document and fill the View Model(this.filteredList) so it can be used by the infinite scroll
   * @param start as the strat point for the infinite scroll
   * @param end as the end point for the infinite scroll
   */
   private async readCsvData(start, end): Promise<void>{
    if (this.dataSource.length !== 0){
        if (this.dataSource.length >= end) {
          for (let index = start; index < end; index++) {
            this.filteredList.push(this.dataSource[index]);
          }
        }else {
          this.filteredList = this.dataSource;
        }
      }
   }

  private updateIndex(): void {
    this.start = this.end;
    this.end = this.limit + this.start;
  }

  // PUBLIC FUNCTIONS
  /**
   * Fuction responsible of the infinite scroll management
   * @param event scroll event
   */
  onTableScroll(event): void {
    const tableViewHeight = event.target.offsetHeight; // viewport
    const tableScrollHeight = event.target.scrollHeight; // length of all table
    const scrollLocation = event.target.scrollTop; // how far user scrolled
    // If the user has scrolled within 200px of the bottom, add more data
    const buffer = 200;
    const limit = Math.abs(tableScrollHeight - tableViewHeight - buffer);
    if (scrollLocation > limit) {
       this.readCsvData(this.start, this.end);
       this.updateIndex();
    }
  }
  /**
   * Fuction responsible of the table row sorting by date, value...
   * @param sort 'date', 'value', 'state'..
   */
  sortData(sort: Sort): any {
    if (!sort.active || sort.direction === '') {
      this.filteredList = this.filteredList .slice();
      return;
    }
    this.filteredList = this.filteredList.slice().sort((a, b) => {
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
// Created to avoid innecesary code, could be added to a const file as an exported fuction.
function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean): any {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
