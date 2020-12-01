import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralDisplay',
  pure: true
})

export class PluralDisplayPipe implements PipeTransform {
  transform(value: string, count: number): any {
    if (+count > 1) {
      return value + "s";
    }
    return value;
  }
}
