import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './dialog/dialog.component';
import { DraggableDialogComponent } from './draggable-dialog/draggable.component';
import { MaterialModuleBundle } from './material-bundle';
import { PipeBundleModule } from './pipes/pipe-bundle.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    PipeBundleModule,
    FlexLayoutModule
  ],

  exports: [
    DialogConfirmComponent,
    DraggableDialogComponent,
    FlexLayoutModule,
    MaterialModuleBundle
  ],

  declarations: [
    DialogConfirmComponent,
    DraggableDialogComponent
  ],

  providers: [

  ],
})
export class SharedBudleModule { }
