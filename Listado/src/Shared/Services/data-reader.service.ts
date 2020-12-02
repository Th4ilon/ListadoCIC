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
              const currentDate = this.createDateType(row[0]);
              this.userArray.push(new ListItem(currentDate, parseInt( row[1], 10), parseInt( row[2], 2), row[3]));
            }
            console.log(this.userArray);
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

  getCsvData(): ListItem[]{
    return this.userArray;
  }
}
