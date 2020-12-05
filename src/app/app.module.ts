import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NotFoundComponentModule } from './404/404.module';
import { MaterialModuleBundle } from './shared/material-bundle';
import { TopNavModule } from './top-nav/top-nav.module';
import { SideNavModule } from './side-nav/side-nav.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { appReducers } from './stores/global/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { appEffects } from './stores/global/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'myRouter',
      routerState: RouterState.Minimal
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NotFoundComponentModule,
    MaterialModuleBundle,
    TopNavModule,
    SideNavModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      extendedTimeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      newestOnTop: true,
      iconClasses : {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      }
    }),
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
