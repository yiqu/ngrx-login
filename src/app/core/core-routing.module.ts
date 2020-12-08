import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { AllIssuesLandingComponent } from './all/all.component';

export const routes: Routes = [
  { path: "", component: CoreComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllIssuesLandingComponent },
      { path: ':id', component: IssueDetailComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule {}
