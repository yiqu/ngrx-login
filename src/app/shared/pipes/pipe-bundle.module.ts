import { NgModule } from '@angular/core';
import { CountNumberDisplayPipe } from './count-display.pipe';
import { PluralDisplayPipe } from './plural.pipe';
import { DateDisplayPipe } from './time-utils.pipe';
import { UserDisplayPipe } from './user.pipe';
import { CapitalizeFirstLetterPipe } from './letters.pipe';
import { TableColumnDisplayPipe, TableDataDisplayPipe } from './table.pipe';
import { CreatedStatusToCssClassPipe, IssueOpenStatusPipe, OpenStatusToCssClassPipe, PriorityToCssClassPipe, ValueCountPipe } from './general.pipe';

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
    IssueOpenStatusPipe,
    ValueCountPipe
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
    IssueOpenStatusPipe,
    ValueCountPipe
  ],

  providers: [
    DateDisplayPipe
  ],
})
export class PipeBundleModule { }
