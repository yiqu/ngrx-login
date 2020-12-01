import { NgModule } from '@angular/core';
import { NotFoundComponent } from './404.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],

  exports: [

  ],

  declarations: [
    NotFoundComponent
  ],

  providers: [

  ],
})
export class NotFoundComponentModule { }
