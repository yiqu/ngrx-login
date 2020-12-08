import { FormControl } from '@angular/forms';
import { PriorityLevel } from './models/general.model';

export function createFormControl(value: any, disabled: boolean, validators: any[] = [], asyncValids: any[] = []): FormControl {
  let fc = new FormControl({
    value: value ? value : null,
    disabled: disabled
  }, validators, asyncValids);
  return fc;
}

export function createFormControl2(value: any, disabled: boolean, validators: any[] = [], asyncValids: any[] = []): FormControl {
  let fc = new FormControl({
    value: value,
    disabled: disabled
  }, validators, asyncValids);
  return fc;
}


export const PRIORITY_LIST = [
  {
    id: PriorityLevel.High,
    display: "High"
  },
  {
    id: PriorityLevel.Medium,
    display: "Medium"
  },
  {
    id: PriorityLevel.Low,
    display: "Low"
  }
]

export function scrollToElementById(id: string) {
  let top = document.getElementById(id);
  if (top) {
    setTimeout(() => {
      top?.scrollIntoView({block: "end"});
      top = null;
    }, 10)
  }
}
