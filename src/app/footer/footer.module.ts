import { NgModule } from '@angular/core';
import { MaterialModuleBundle } from '../shared/material-bundle';
import { AppFooterComponent } from './footer.component';

@NgModule({
  imports: [
    MaterialModuleBundle
  ],
  exports: [AppFooterComponent],
  declarations: [AppFooterComponent],
  providers: [],
})
export class FooterModule { }
