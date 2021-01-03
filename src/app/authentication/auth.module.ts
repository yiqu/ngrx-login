import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthSignupComponent } from './signup/signup.component';
import { AuthSigninComponent } from './signin/signin.component';
import { AuthResetComponent } from './reset/reset.component';
import { MaterialModuleBundle } from '../shared/material-bundle';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeBundleModule,
    MaterialModuleBundle,
    AuthRoutingModule
  ],

  exports: [

  ],

  declarations: [
    AuthComponent,
    AuthSigninComponent,
    AuthSignupComponent,
    AuthResetComponent
  ],

  providers: [

  ],

})
export class AuthModule { }
