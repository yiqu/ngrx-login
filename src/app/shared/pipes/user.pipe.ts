import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'userDisplay',
  pure: true
})
export class UserDisplayPipe implements PipeTransform {

  transform(value: any, type?: string): any {
    let res: string = value['display'];
    switch (type) {
      case "FULL": {
        res = value['display'] + value['user']['email'];
        break;
      }
      case "DISPLAY": {
        res = value['display'];
        break;
      }
      case "UID": {
        res = value.user?.uid;
        break;
      }
      case "EMAIL": {
        res = value.user?.email;
        break;
      }
    }
    return res;
  }
}
