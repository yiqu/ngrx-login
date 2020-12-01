import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModuleBundle } from '../shared/material-bundle';

@NgModule({
  imports: [
    MaterialModuleBundle,
    FormsModule,
    CommonModule,
    RouterModule
  ],

  exports: [
    SideNavComponent
  ],

  declarations: [
    SideNavComponent
  ],

  providers: [

  ],
})
export class SideNavModule { }
