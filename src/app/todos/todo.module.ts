import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModuleBundle } from '../shared/material-bundle';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { TodoCoreComponent } from './core/core.component';
import { todoEffects } from './store/todo.effects';
import { todoItemsEntityReducer } from './store/todo.reducer';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeBundleModule,
    SharedBudleModule,
    StoreModule.forFeature("todo", todoItemsEntityReducer),
    EffectsModule.forFeature(todoEffects),
    TodoRoutingModule
  ],

  exports: [],

  declarations: [
    TodoComponent,
    TodoCoreComponent
  ],

  providers: [],
})
export class TodoModule { }
