import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'tableColumnDisplay',
  pure: true
})
export class TableColumnDisplayPipe implements PipeTransform {

  @memo()
  transform(value: string): any {
    let res: string = value;

    switch(value) {
      case "name": {
        res = "Name";
        break;
      }
      case "example": {
        res = "Example";
        break;
      }
    }
    return res;
  }

}

@Pipe({
  name: 'tableDataDisplay',
  pure: true
})
export class TableDataDisplayPipe implements PipeTransform {

  constructor() {
  }

  transform(value: any, colId: string): any {
    let res: any = value;

    switch(colId) {
      case "name": {
        res = res;
        break;
      }
      case "example": {
        res = res;
        break;
      }
    }
    return res;
  }

}
