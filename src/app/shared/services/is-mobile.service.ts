import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsMobileService {

  // to check if is current mobile mode, call mediaQList.matches. True if mobile
  mediaQList!: MediaQueryList;

  constructor() {

  }
}
