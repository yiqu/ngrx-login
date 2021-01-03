import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, filter, map } from "rxjs/operators";
import { CoreService } from "src/app/shared/services/core.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { environment } from "src/environments/environment";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import * as authActions from './auth.actions';
import { VerifiedUser } from "src/app/shared/models/user.model";
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';


@Injectable()
export class AuthEffects {

  constructor(public actions$: Actions, public ts: ToasterService, public auth: AngularFireAuth) {
  }

  userAuthStateChange$ = createEffect(() => {
    return this.auth.authState.pipe(
      map((u) => {
        console.log("user is ", u)
      })
    )
  }, {dispatch: false});

  registerNewUserEmailPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.authRegisterStart),
      exhaustMap((data) => {
        const email: string = data.email;
        const pw: string = data.password;

        return firebase.default.auth().createUserWithEmailAndPassword(email, pw).then(
          (user: firebase.default.auth.UserCredential) => {

            const verified = new VerifiedUser(new Date().getTime(), user.user?.displayName, user.user?.email, user.user?.emailVerified,
              user.user?.isAnonymous, null, user.user?.photoURL, user.user?.providerData, user.user?.metadata, user.user?.tenantId,
              user.user?.uid, user.user?.phoneNumber, []);

            return authActions.authRegisterSuccess({user: verified, redirect: false, showAlert: false});
          },
          (rej) => {
            console.log("err: ",rej);
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return authActions.authRegisterFailed({errorMsg: authErrMsg});
          }
        )
      })
    );
  });

}
