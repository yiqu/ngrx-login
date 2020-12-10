import { FormControl } from '@angular/forms';

export function customRequiredValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const val: any = control.value;
  if (val && (""+val).trim() !== "") {
    return undefined;
  }
  return {"fieldRequired": true};
}

export function custom256CountValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const val: any = control.value;
  if (val && (""+val).trim() !== "") {
    const v = (val+"").trim();
    if (v.length <= 256) {
      return undefined;
    }
  }
  return {"fieldTooLong": true};
}

export function customOnlyLettersValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const letters: RegExp = /^[A-Za-z ]+$/;
  if (control.value && control.value.trim().match(letters)) {
    return undefined;
  }
  return {"lettersOnly": true};
}

export function numbersOnlyValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const nums: RegExp = /^\d+$/;
  if (control.value && control.value.trim().match(nums)) {
    return undefined;
  }
  return {"numbersOnly": true};
}


export function customOnlyNumbersAndDecimalsValidator(control: FormControl): {[s: string]: boolean} | undefined {
  //const num: RegExp = /^[0-9]+([,.][0-9]+)?$/;
  const num: RegExp = /^[0-9]+([.][0-9]+)?$/;
  // convert to string first
  const val = control.value + "";
  if (control.value && val.match(num)) {
    return undefined;
  }
  return {"decimalAndNumbersOnly": true};
}

/**
 * Regex for allowing alphanumeric,-,_ and space
 * @param control
 */
export function alphaNumericValidator(control: FormControl): {[s: string]: boolean} | undefined {
  const alphaNumeric: RegExp = /^[a-z\d\-_\s]+$/i;
  // convert to string first
  const val = (control.value + "").trim();
  if (control.value && val.match(alphaNumeric)) {
    return undefined;
  }
  return {"alphanumericOnly": true};
}
