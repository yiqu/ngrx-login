import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as fu from '../../shared/general.utils';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppState } from 'src/app/stores/global/app.reducer';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AuthEmailCredential } from '../../shared/models/user.model';

@Component({
  selector: 'app-auth-reset',
  templateUrl: 'reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class AuthResetComponent implements OnInit, OnDestroy {

  title: string = "Reset your password";
  subtitle: string = "Enter your user account's verified email address and we will send you a password reset link.";
  submitBtnText: string = "Send password reset email";
  compDest$: Subject<any> = new Subject<any>();
  resetFg: FormGroup | undefined;
  avartarImgSrc: string = "assets/banner/resolved2.png";

  get emailFc(): FormControl {
    return <FormControl>this.resetFg?.get("email");
  }

  constructor(public fb: FormBuilder, public store: Store<AppState>, public as: AuthService) {
    this.createFg();
  }

  ngOnInit() {
    this.resetFg!.valueChanges.pipe(
      takeUntil(this.compDest$)
    )
    .subscribe((val) => {
    });
  }

  createFg() {
    this.resetFg = this.fb.group({
      email: fu.createFormControl(null, false, [Validators.required, Validators.email])
    });
  }

  disableFieldsOnLoading(loading: boolean) {
    if (this.resetFg) {
      loading ? this.resetFg.disable({onlySelf: true, emitEvent: false}) :
        this.resetFg.enable({onlySelf: true, emitEvent: false});
    }
  }

  onSubmit() {
    const res: AuthEmailCredential = this.resetFg?.value;
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
