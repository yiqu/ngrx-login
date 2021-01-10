import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
    // this.http.get("api/users/all").subscribe((res) => {
    //   console.log(res)
    // })
  }

}
