import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/stores/global/app.reducer';
import * as fromUiActions from '../../stores/ui/ui.actions';
import * as fromRouterSelectors from '../../stores/router/router.selectors';
import { Observable } from 'rxjs';
import * as fromIssueActions from '../../stores/issue/issue.actions';
import * as fromIssueSelectors from '../../stores/issue/issue.selectors';
import { IIssue } from '../models/general.model';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Update } from '@ngrx/entity';

export const ISSUES_PATH: string = "issues";

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
  public getIssueBySelectedId$: Observable<IIssue | undefined> = this.store.select(fromIssueSelectors.getIssueBySelectedId);
  public issueOverallLoading$: Observable<boolean> = this.store.select(fromIssueSelectors.getIssuesOverallLoading);
  public getIssueEditMode$: Observable<boolean> = this.store.select(fromIssueSelectors.getIssueEditMode);
  public refreshAllIssuesRequest$: Observable<number> = this.store.select(fromIssueSelectors.refreshAllIssuesRequestDate);
  public issuesRefreshLoading$: Observable<boolean> = this.store.select(fromIssueSelectors.refreshingAllIssuesLoading);
  public getUserSearchTerm$: Observable<string | null> = this.store.select(fromIssueSelectors.getLastUserSearchTerm);

  currentIssueCounter: number = 1;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute) {
    // start keep track of overall issue counter number
    this.totalIssueCount$.subscribe((res: number) => {
      this.currentIssueCounter = res + 1;
    });

    // set up listener for all isses refresh
    this.refreshAllIssuesRequest$.subscribe(
      (res) => {
        if (res) {
          console.log("refreshing all issues:", res)
          this.getAllIssues(null, true);
        }
      }
    );
  }

  toggleNewIssuePane(status: boolean) {
    this.store.dispatch(fromUiActions.toggleNewIssuePane({open: status}));
  }

  getAllIssues(searchTerm: string | null, showLoadMask: boolean = false) {
    this.store.dispatch(fromIssueActions.loadAllIssuesStart({url: ISSUES_PATH, searchTerm: searchTerm, showLoadMask: showLoadMask}));
  }

  toggleOpenCloseIssue(i: IIssue) {
    if (i.open) {
      this.store.dispatch(fromIssueActions.closeOneIssueStart({data: i}));
    } else {
      this.store.dispatch(fromIssueActions.openOneIssueStart({data: i}));
    }
  }

  setSelectedIssueId(id: string | null) {
    this.store.dispatch(fromIssueActions.setSelectedIssueId({issueId: id}));
  }

  toggleIssueEditMode(mode: boolean) {
    this.store.dispatch(fromIssueActions.toggleIssueEditMode({inEditMode: mode}));
  }

  deleteIssue(issue: IIssue, url: string) {
    this.store.dispatch(fromIssueActions.deleteIssueStart({issue: issue, url: url}));
  }

  goBackToIssuesPage() {
    this.router.navigate(["/", "issues"]);
  }

  goToIssueDetailView(id: string | number) {
    this.router.navigate(['/issues', id]);
  }

  editIssue(updates: Update<IIssue>, issue: IIssue) {
    const url = ISSUES_PATH + "/" + updates.id;
    this.store.dispatch(fromIssueActions.editIssueStart({updates: updates, url: url, issue: issue}));
  }
}
