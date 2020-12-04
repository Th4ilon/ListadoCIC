import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output  } from '@angular/core';
// Services
import { DataReaderService } from '../../../Shared/Services/data-reader.service';
// Models
import { ListItem } from '../../../Shared/Models/ListItemModel';

@Component({
  selector: 'app-filter-by-values',
  templateUrl: './filter-by-values.component.html',
  styleUrls: ['./filter-by-values.component.scss']
})
export class FilterByValuesComponent implements OnInit {
  @ViewChild('valueFinder') valueFinder: ElementRef;
  @Output()
  emitValues = new EventEmitter<string>();
  listOfIntemsFinded: ListItem[] = [];
  value: number;
  date: Date;

  constructor(private csvData: DataReaderService) { }
  ngOnInit(): void {}

  /**
   * Look for spesific items based on the value of the datepicker.
   * @param dateObject current datepicker value.
   */
  async findDate(dateObject): Promise<void>{
    const dataSource = await this.csvData.getCsvData() as ListItem[];
    this.listOfIntemsFinded = [];
    for (let index = 1; index < dataSource.length; index++) {
      // Condition based on date MM/DD/YYYY not having in cosideration the exact time.
      if (dataSource[index].date.setHours(0, 0, 0, 0) === dateObject.value.getTime()) {
        this.listOfIntemsFinded.push(dataSource[index]);
      }
    }
    this.emitNewList();
  }
  /**
   * Look for spesific items based on the value of the value input.
   *
   * the input value: this.valueFinder.nativeElement.value wich is part of
   *  @ViewChild('valueFinder') valueFinder: ElementRef;
   */
  async findValue(): Promise<void>{
    const dataSource = await this.csvData.getCsvData() as ListItem[];
    this.listOfIntemsFinded = [];
    for (let index = 1; index < dataSource.length; index++){
      if (dataSource[index].value.toString() === this.valueFinder.nativeElement.value) {
          this.listOfIntemsFinded.push(dataSource[index]);
        }
      }
    this.emitNewList();
  }
  emitNewList(): void{
    this.csvData.setFilteredList(this.listOfIntemsFinded);
    this.emitValues.emit('new list');
  }
}
