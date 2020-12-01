import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NotFoundComponentModule } from './404/404.module';
import { MaterialModuleBundle } from './shared/material-bundle';
import { TopNavModule } from './top-nav/top-nav.module';
import { SideNavModule } from './side-nav/side-nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NotFoundComponentModule,
    MaterialModuleBundle,
    TopNavModule,
    SideNavModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
