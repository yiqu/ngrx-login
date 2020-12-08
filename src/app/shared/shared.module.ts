import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './dialog/dialog.component';
import { MaterialModuleBundle } from './material-bundle';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
  ],

  exports: [
    DialogConfirmComponent
  ],

  declarations: [
    DialogConfirmComponent
  ],

  providers: [

  ],
})
export class SharedBudleModule { }
