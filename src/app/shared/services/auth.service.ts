import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as fromAuthActions from '../../stores/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/global/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private store: Store<AppState>) {

  }

  onSignUp(email: string, pw: string) {
    if (email && pw) {
      this.store.dispatch(fromAuthActions.authRegisterStart({email: email, password: pw}));
    }
  }


}
