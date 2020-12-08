import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/global/app.reducer';
import * as fromUiActions from '../../stores/ui/ui.actions';
import * as fromRouterSelectors from '../../stores/router/router.selectors';
import { Observable } from 'rxjs';
import * as fromIssueActions from '../../stores/issue/issue.actions';
import * as fromIssueSelectors from '../../stores/issue/issue.selectors';
import { IIssue } from '../models/general.model';

const ISSUES_PATH: string = "issues";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public getQueryParamById$: Observable<string | undefined> =
    this.store.select(fromRouterSelectors.selectByParamId("newIssuePane"));
  public getAllIssues$: Observable<IIssue[]> = this.store.select(fromIssueSelectors.selectAllIssues);
  public openIssueCount$: Observable<number> = this.store.select(fromIssueSelectors.getOpenIssueCount);
  public closedIssueCount$: Observable<number> = this.store.select(fromIssueSelectors.getClosedIssueCount);
  public totalIssueCount$: Observable<number> = this.store.select(fromIssueSelectors.selectTotalIssueCount);
  public getIssueCounterNumber =
    (id: string | undefined): Observable<number | undefined> => this.store.select(fromIssueSelectors.getIssueNumber(id));
  public getIssueById = (id: string) => this.store.select(fromIssueSelectors.selectIssueById(id));
  public getIssueByParamId = (id: string) => this.store.select(fromIssueSelectors.getIssueByParamId(id));
  public issueOverallLoading$: Observable<boolean> = this.store.select(fromIssueSelectors.getIssuesOverallLoading);

  currentIssueCounter: number = 1;

  constructor(private store: Store<AppState>) {
    // start keep track of overall issue counter number
    this.totalIssueCount$.subscribe((res: number) => {
      this.currentIssueCounter = res + 1;
    });
  }

  toggleNewIssuePane(status: boolean) {
    this.store.dispatch(fromUiActions.toggleNewIssuePane({open: status}));
  }

  getAllIssues() {
    this.store.dispatch(fromIssueActions.loadAllIssuesStart({url: ISSUES_PATH}));
  }

  toggleOpenCloseIssue(i: IIssue) {
    if (i.open) {
      this.store.dispatch(fromIssueActions.closeOneIssueStart({data: i}));
    } else {
      this.store.dispatch(fromIssueActions.openOneIssueStart({data: i}));
    }

  }

}
