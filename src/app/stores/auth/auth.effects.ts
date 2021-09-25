import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, filter, map } from "rxjs/operators";
import { CoreService } from "src/app/shared/services/core.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { environment } from "src/environments/environment";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as authActions from './auth.actions';
import { VerifiedUser } from "src/app/shared/models/user.model";
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

  private auth: Auth = getAuth();

  constructor(public actions$: Actions, public ts: ToasterService, public router: Router) {
  }


  registerNewUserEmailPassword$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.authRegisterStart),
      exhaustMap((data) => {
        const email: string = data.email;
        const pw: string = data.password;

        return createUserWithEmailAndPassword(this.auth, email, pw).then(
          (user) => {
            const verified = new VerifiedUser(new Date().getTime(), user.user?.displayName, user.user?.email, user.user?.emailVerified,
              user.user?.isAnonymous, null, user.user?.photoURL, user.user?.providerData, user.user?.metadata, user.user?.tenantId,
              user.user?.uid, user.user?.phoneNumber, []);

            return authActions.authRegisterSuccess({user: verified, redirect: false, showAlert: false});
          }
        )
        .catch((rej) =>  {
            console.log("err: ",rej);
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return authActions.authRegisterFailed({errorMsg: authErrMsg});
        })
      })
    );
  });

  effectName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.authRegisterSuccess),
      map(() => {
        this.router.navigate(['/']);
      })
    );
  }, {dispatch: false});

}
