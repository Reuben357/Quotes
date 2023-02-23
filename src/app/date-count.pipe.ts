import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    const date: Date = new Date();
    const updatedDate: any = new Date(date.getFullYear(), date.getMinutes(), date.getDate());
    const dateDiffernce = Math.abs(updatedDate.value);
    const secondsInDay = 86400;
    const dateDiffernceInSeconds = dateDiffernce * 0.001;
    const dateCount = dateDiffernceInSeconds / secondsInDay;

    if (dateCount >= 0.5) {
      return Math.ceil(dateCount) + '' + 'days ago.';
    } else {
      return 'today;';
    }
  }
}
