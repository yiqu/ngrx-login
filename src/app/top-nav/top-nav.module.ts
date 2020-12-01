import { NgModule } from '@angular/core';
import { TopNavComponent } from './top-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { CapitalizeFirstLetterPipe } from '../shared/pipes/letters.pipe';
import { MaterialModuleBundle } from '../shared/material-bundle';

@NgModule({
  imports: [
    MaterialModuleBundle,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipeBundleModule
  ],

  exports: [
    TopNavComponent
  ],

  declarations: [
    TopNavComponent
  ],

  providers: [
    CapitalizeFirstLetterPipe
  ],

})
export class TopNavModule {
}
