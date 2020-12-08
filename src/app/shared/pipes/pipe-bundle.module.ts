import { NgModule } from '@angular/core';
import { CountNumberDisplayPipe } from './count-display.pipe';
import { PluralDisplayPipe } from './plural.pipe';
import { DateDisplayPipe } from './time-utils.pipe';
import { UserDisplayPipe } from './user.pipe';
import { CapitalizeFirstLetterPipe } from './letters.pipe';
import { TableColumnDisplayPipe, TableDataDisplayPipe } from './table.pipe';
import { CreatedStatusToCssClassPipe, issueOpenStatusPipe, OpenStatusToCssClassPipe, PriorityToCssClassPipe } from './general.pipe';

@NgModule({
  imports: [],

  exports: [
    PluralDisplayPipe,
    CountNumberDisplayPipe,
    DateDisplayPipe,
    UserDisplayPipe,
    CapitalizeFirstLetterPipe,
    TableColumnDisplayPipe,
    TableDataDisplayPipe,
    PriorityToCssClassPipe,
    OpenStatusToCssClassPipe,
    CreatedStatusToCssClassPipe,
    issueOpenStatusPipe
  ],

  declarations: [
    PluralDisplayPipe,
    CountNumberDisplayPipe,
    DateDisplayPipe,
    UserDisplayPipe,
    CapitalizeFirstLetterPipe,
    TableColumnDisplayPipe,
    TableDataDisplayPipe,
    PriorityToCssClassPipe,
    OpenStatusToCssClassPipe,
    CreatedStatusToCssClassPipe,
    issueOpenStatusPipe
  ],

  providers: [],
})
export class PipeBundleModule { }
