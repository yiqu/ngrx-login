import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModuleBundle } from '../shared/material-bundle';
import { IssueDisplayComponent } from './all/issue-display/display.component';
import { IssueCreatorComponent } from './all/issue-creator/creator.component';
import { StoreModule } from '@ngrx/store';
import * as fromIssueReducer from '../stores/issue/issue.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as fromIssueEffects from '../stores/issue/issue.effects';
import { SingleIssueComponent } from './all/issue-display/issue/issue.component';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AllIssuesLandingComponent } from './all/all.component';
import { SharedBudleModule } from '../shared/shared.module';
import { IssueDetailEditComponent } from './issue-detail/edit/edit.component';
import { IssueDetailViewComponent } from './issue-detail/view/view.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModuleBundle,
    StoreModule.forFeature("issues", fromIssueReducer.issuesEntityReducer),
    EffectsModule.forFeature(fromIssueEffects.issuesEffects),
    PipeBundleModule,
    SharedBudleModule,
    CoreRoutingModule,
  ],

  exports: [

  ],

  declarations: [
    CoreComponent,
    IssueDisplayComponent,
    IssueCreatorComponent,
    SingleIssueComponent,
    IssueDetailComponent,
    AllIssuesLandingComponent,
    IssueDetailViewComponent,
    IssueDetailEditComponent
  ],

  providers: [

  ],
})
export class CoreModule { }
