import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

// Models
import { ListItem } from '../Models/ListItemModel';


@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  public userArray: ListItem[] = [];

  constructor(private http: HttpClient, private datePipe: DatePipe){
    this.http.get('assets/Peso003.csv', {responseType: 'text'})
    .subscribe(
        data => {
            const csvToRowArray = data.split('\n');
            for (let index = 14000; index < csvToRowArray.length - 1; index++) {
              const row = csvToRowArray[index].split(';');
              // this.createDateType(row[0]);
              this.userArray.push(new ListItem(new Date(row[0]), parseInt( row[1], 10), parseInt( row[2], 2), row[3]));
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }
  /*private createDateType(dates: string): void{
    const currentDate = dates.substring(0, 10).split('/');
    const currentTime = dates.substring(11, 19);
    const dateObject = new Date(currentDate[2], currentDate[1] - 1, currentDate[0]);
    const timeObject = new Date(currentTime);
    console.log(currentDate);
  }*/
  getCsvData(): ListItem[]{
    return this.userArray;
  }
}
