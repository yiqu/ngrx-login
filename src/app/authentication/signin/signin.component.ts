import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as fu from '../../shared/general.utils';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppState } from 'src/app/stores/global/app.reducer';

@Component({
  selector: 'app-auth-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class AuthSigninComponent implements OnInit, OnDestroy {

  signInTitle: string = "Sign in with your Issue Manager account.";
  avartarImgSrc: string = "assets/banner/resolved2.png";
  signFg: FormGroup;
  compDest$: Subject<any> = new Subject<any>();

  get idFc(): FormControl {
    return <FormControl>this.signFg.get("id");
  }

  get passwordFc(): FormControl {
    return <FormControl>this.signFg.get("password");
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
      id: fu.createFormControl(id, false, [Validators.required, Validators.email]),
      password: fu.createFormControl(pw, false),
      saveSession: fu.createFormControl(true, false)
    });
  }

  ngOnInit() {
    this.signFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((val) => {
    });
  }

  onSignInClick() {
    if (this.passwordFc.value && this.passwordFc.value.trim()!=="") {

    }
  }

  signIn() {
  }

  disableFieldsOnLoading(loading: boolean) {
    if (this.signFg) {
      loading ? this.signFg.disable({onlySelf: true, emitEvent: false}) :
        this.signFg.enable({onlySelf: true, emitEvent: false});
    }
  }

  onForgotPassword() {
    this.router.navigate(['/', 'auth', 'reset']);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }


}
