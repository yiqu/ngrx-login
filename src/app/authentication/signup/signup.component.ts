import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as fu from '../../shared/general.utils';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ErrorStateMatcher } from '@angular/material/core';
import * as em from '../../shared/error-matchers/error-state.matcher';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppState } from 'src/app/stores/global/app.reducer';


@Component({
  selector: 'app-auth-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class AuthSignupComponent implements OnInit, OnDestroy {

  accountType: string = "Issue Manager";
  matcher: ErrorStateMatcher = new em.AfterActionsErrorStateMatcher();
  signInTitle: string = "Create your Issue Manager account.";
  avartarImgSrc: string = "assets/banner/resolved2.png";
  signFg: FormGroup;
  compDest$: Subject<any> = new Subject<any>();


  get emailFc(): FormControl {
    return <FormControl>this.signFg.get("email");
  }

  get passwordFc(): FormControl {
    return <FormControl>this.signFg.get("password");
  }

  get repasswordFc(): FormControl {
    return <FormControl>this.signFg.get("repassword");
  }

  constructor(public fb: FormBuilder, public as: AuthService, public router: Router,
    private store: Store<AppState>) {

      let id: string | undefined = undefined;
      let pw: string | undefined = undefined;

      if (!environment.production) {
        id = "t1@test.com";
        pw = "123456";
      }

      this.signFg = this.fb.group({
        email: fu.createFormControl(id, false, [Validators.required, Validators.email]),
        password: fu.createFormControl(pw, false, [Validators.required]),
        repassword: fu.createFormControl(pw, false, [Validators.required])
      });
  }

  ngOnInit() {

    this.signFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((val) => {
      if (this.passwordFc.value !== this.repasswordFc.value) {
        this.repasswordFc.setErrors({"passwordDoesNotMatch": true});
      } else {
        this.repasswordFc.setErrors(null);
      }
    });
  }

  onSignupClick() {
    const res = this.signFg.value;
    if (res.password !== res.repassword) {

    } else {
      console.log(res)
      this.as.onSignUp(res.email, res.password);
    }
  }

  signup() {
  }

  disableFieldsOnLoading(loading: boolean) {
    if (this.signFg) {
      loading ? this.signFg.disable({onlySelf: true, emitEvent: false}) :
        this.signFg.enable({onlySelf: true, emitEvent: false});
    }
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }

}
