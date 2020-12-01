import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'dateDisplay', pure: true})
export class DateDisplayPipe implements PipeTransform {

  transform(value: any, displayType: string): any {
    if (value || (value === 0)) {
      const dateMilli = +value;
      switch (displayType) {
        case "FROMNOW": {
          return moment(dateMilli).fromNow();
        }
        case "MDY": {
          return moment(dateMilli).format("MM-DD-YYYY");
        }
        case "FULLDATE": {
          return moment(dateMilli).format("MM/DD/YY, h:mm a");
        }
        case "INPUTDATE": {
          return moment(dateMilli).format("MM/DD/YY, HH:mm");
        }
        case "FULLANDFROMNOW": {
          return moment(dateMilli).format("MM/DD/YY, h:mm a") + " (" + moment(dateMilli).fromNow() + ")";
        }
        case "MDYANDFROMNOW": {
          return moment(dateMilli).format("MM-DD-YYYY") + " (" + moment(dateMilli).fromNow() + ")";
        }
        default: {
          return value;
        }
      }
    }
    return "BAD DATE / NO DATE";

  }
}
