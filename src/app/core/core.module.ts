import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreRoutingModule,
    MaterialModuleBundle
  ],

  exports: [

  ],

  declarations: [
    CoreComponent
  ],

  providers: [

  ],
})
export class CoreModule { }
