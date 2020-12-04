// Model
export class ListItem{
    date: Date;
    value: number;
    state: number;
    stateDetail: string;

    constructor(date: string = '', value: number = 0, state: number = 0, stateDetail: string = ''){
      this.date = this.createDateType(date);
      this.value = value;
      this.state = state;
      this.stateDetail = stateDetail;
    }
   createDateType(dates: string): Date{
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
}
