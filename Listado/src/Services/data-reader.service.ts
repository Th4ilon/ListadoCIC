import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataReaderService {

  public userArray = [];

  constructor(private http: HttpClient){
    this.http.get('assets/Peso003.csv', {responseType: 'text'})
    .subscribe(
        data => {
            const csvToRowArray = data.split('\n');
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              const row = csvToRowArray[index].split(';');
              this.userArray.push(row);
            }
            console.log(this.userArray);
        },
        error => {
            console.log(error);
        }
    );
  }

  getCsvData(): any[]{
    return this.userArray;
  }
}

// Model
export class User{
  id: number;
  name: '';
  lastName: '';

  constructor(id: number, name: '', lastName: ''){
    this.id = id;
    this.name = name;
    this.lastName = lastName;
  }
}
