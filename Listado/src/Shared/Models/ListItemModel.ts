// Model
export class ListItem{
    date: Date;
    value: number;
    state: number;
    stateDetail: string;

    constructor(date: Date, value: number, state: number, stateDetail: string){
      this.date = date;
      this.value = value;
      this.state = state;
      this.stateDetail = stateDetail;
    }
}
