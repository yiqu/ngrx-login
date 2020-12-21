import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './dialog/dialog.component';
import { DraggableDialogComponent } from './draggable-dialog/draggable.component';
import { MaterialModuleBundle } from './material-bundle';
import { PipeBundleModule } from './pipes/pipe-bundle.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    PipeBundleModule
  ],

  exports: [
    DialogConfirmComponent,
    DraggableDialogComponent
  ],

  declarations: [
    DialogConfirmComponent,
    DraggableDialogComponent
  ],

  providers: [

  ],
})
export class SharedBudleModule { }
