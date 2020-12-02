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

  constructor(private http: HttpClient){ }

  getCsvData(): any{
    return this.http.get('assets/Peso003.csv', {responseType: 'text'});
  }
}
