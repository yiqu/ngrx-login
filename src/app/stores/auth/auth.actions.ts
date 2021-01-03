import { createAction, props } from '@ngrx/store';
import { Action } from '@ngrx/store';
import { AuthInfoFromUser, VerifiedUser } from '../../shared/models/user.model';

const LOGIN_START: string = "[Auth/Login] Auth Login Start";
const LOGIN_SUCCESS: string = "[Auth/Login] Auth Login Success";
const LOGIN_FAILURE: string = "[Auth/Login] Auth Login Failure";

const LOGIN_TIME_SAVE_START: string = "[DB/User/Profile] Update User Login Times Start";
const LOGIN_TIME_SAVE_SUCCESS: string = "[DB/User/Profile] Update User Login Times Success";
const LOGIN_TIME_SAVE_FAILURE: string = "[DB/User/Profile] Update User Login Times Failure";

const LOGOUT_START: string = "[Auth/Logout] Auth Logout Start";
const LOGOUT_SUCCESS: string = "[Auth/Logout] Auth Logout Success";
const LOGOUT_FAILURE: string = "[Auth/Logout] Auth Logout Failure";

const NEW_USER_REGISTRATION_START: string = "[Auth/Register] Auth New User Register Start";
const NEW_USER_REGISTRATION_SUCCESS: string = "[Auth/Register] Auth New User Register Success";
const NEW_USER_REGISTRATION_FAILURE: string = "[Auth/Register] Auth New User Register Failure";


export const authRegisterStart = createAction(
  NEW_USER_REGISTRATION_START,
  props<{email: string, password: string, redirect?: boolean, showAlert?: boolean}>()
);

export const authRegisterSuccess = createAction(
  NEW_USER_REGISTRATION_SUCCESS,
  props<{user: VerifiedUser, redirect?: boolean, showAlert?: boolean}>()
);

export const authRegisterFailed = createAction(
  NEW_USER_REGISTRATION_FAILURE,
  props<{errorMsg: string}>()
);
