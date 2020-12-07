import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/global/app.reducer';
import * as fromUiActions from '../../stores/ui/ui.actions';
import * as fromRouterSelectors from '../../stores/router/router.selectors';
import { Observable } from 'rxjs';
import * as fromIssueActions from '../../stores/issue/issue.actions';
import * as fromIssueSelectors from '../../stores/issue/issue.selectors';
import { IIssue } from '../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public getQueryParamById$: Observable<string | undefined> =
    this.store.select(fromRouterSelectors.selectByParamId("newIssuePane"));

  public getAllIssues$: Observable<IIssue[]> = this.store.select(fromIssueSelectors.selectAllIssues);

  constructor(private store: Store<AppState>) {
  }

  toggleNewIssuePane(status: boolean) {
    this.store.dispatch(fromUiActions.toggleNewIssuePane({open: status}));
  }

  getAllIssues(url: string) {
    this.store.dispatch(fromIssueActions.loadAllIssuesStart({url: url}));
  }

}
