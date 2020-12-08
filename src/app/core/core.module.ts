import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle';
import { IssueDisplayComponent } from './issue-display/display.component';
import { IssueCreatorComponent } from './issue-creator/creator.component';
import { StoreModule } from '@ngrx/store';
import * as fromIssueReducer from '../stores/issue/issue.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as fromIssueEffects from '../stores/issue/issue.effects';
import { SingleIssueComponent } from './issue-display/issue/issue.component';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AllIssuesLandingComponent } from './all/all.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreRoutingModule,
    MaterialModuleBundle,
    StoreModule.forFeature("issues", fromIssueReducer.issuesEntityReducer),
    EffectsModule.forFeature(fromIssueEffects.issuesEffects),
    PipeBundleModule
  ],

  exports: [

  ],

  declarations: [
    CoreComponent,
    IssueDisplayComponent,
    IssueCreatorComponent,
    SingleIssueComponent,
    IssueDetailComponent,
    AllIssuesLandingComponent
  ],

  providers: [

  ],
})
export class CoreModule { }
