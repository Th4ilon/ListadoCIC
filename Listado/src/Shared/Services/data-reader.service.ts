import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Models
import { ListItem } from '../Models/ListItemModel';


@Injectable({
  providedIn: 'root'
})
export class DataReaderService {
  public listOfIntemsFinded: ListItem[] = [];
  private httpGetUseObject = {
    url: 'http://localhost:4200/assets/Peso003.csv',
    responseConfig:
    {
      responseType: 'text'
    }
  }

  constructor(private http: HttpClient) { }

  /**
   * Parse the csv data into a list of items based on the model(ListItem[]).
   */
  csvtransformer(): Promise<ListItem[]> {
    this.listOfIntemsFinded = [];
    return new Promise(resolve => {
      this.http.get(this.httpGetUseObject.url, { responseType: 'text' }).subscribe((data: any) => {
        const csvToRowArray = data.split('\n');
        for (let index = 7; index < csvToRowArray.length - 1; index++) {
          const row = csvToRowArray[index].split(';');
          this.listOfIntemsFinded.push(new ListItem(row[0], parseInt(row[1], 10), parseInt(row[2], 2), row[3]));
        }
        resolve(this.listOfIntemsFinded);
      },
        error => {
          console.log(error);
        });
    });
  }

  /**
   * getCsvData used for retrieving data from the csv document
   */
  async getCsvData(): Promise<ListItem[]> {
    return await this.csvtransformer() as ListItem[];
  }
  /**
   * Updates the value of the const listOfIntemsFinded with the filtered one
   * @param listOfIntemsFinded new list with the items already filtered.
   */
  setFilteredList(listOfIntemsFinded: ListItem[]): void {
    this.listOfIntemsFinded = listOfIntemsFinded;
  }
  /**
   * Used as an scope to return the current list of item in the csv affter being filtered
   */
  getFilteredList(): ListItem[] {
    return this.listOfIntemsFinded;
  }
}
