import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'capitalizeFirstLetter',
  pure: true
})
export class CapitalizeFirstLetterPipe implements PipeTransform {

  @memo()
  transform(value: string): any {
    if (value) {
      return this.capitalizeFirstLetter(value);
    }
  }

  capitalizeFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
}
