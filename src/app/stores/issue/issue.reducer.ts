import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { IIssue, Issue } from 'src/app/shared/models/general.model';
import * as issueActions from './issue.actions';

export interface IssueEntityState extends EntityState<IIssue> {
  loading: boolean;
  fbError: boolean;
  fbErrorMsg: string | null;
  allIssuesLastFetched: number;
}

export function selectId(i: IIssue) {
  return i.id!;
}
export function comparator(a: IIssue, b: IIssue) {
  if (a.dateCreated && b.dateCreated) {
    return a.dateCreated < b.dateCreated ? 1 : -1;
  }
  return 1;
}
export const adapter = createEntityAdapter<IIssue>({
  selectId: selectId,
  sortComparer: comparator // Sorting will be done in firebase instead of here
})

export const inititalState = adapter.getInitialState({
  loading: false,
  fbError: false,
  allIssuesLastFetched: 0
});


export const issueEntityReducer = createReducer(
  inititalState,

  on(issueActions.createIssueStart, (state, {url, data}) => {
    return adapter.addOne(data, {
      ...state,
      loading: true,
      fbError: false,
      fbErrorMsg: null
    });
  }),

  on(issueActions.createIssueSuccess, (state, {data, dateFinished}) => {
    return adapter.updateOne(data, {
      ...state,
      loading: true,
      fbError: false,
      fbErrorMsg: null
    })
  }),

  on(issueActions.createIssueFailed, (state, {data, errMsg}) => {
    return adapter.removeOne(data.id, {
      ...state,
      loading: false,
      fbError: true,
      fbErrorMsg: errMsg
    })
  }),

  on(issueActions.createIssueCleanupSuccess, (state) => {
    return {
      ...state,
      loading: false,
      fbError: false,
      fbErrorMsg: null
    }
  }),

  on(issueActions.createIssueCleanupFailed, (state, {errorMsg}) => {
    return {
      ...state,
      loading: false,
      fbError: true,
      fbErrorMsg: errorMsg
    }
  }),

  on(issueActions.loadAllIssuesSuccess, (state, {data, updatedTime}) => {
    return adapter.setAll(data, {
      ...state,
      allIssuesLastFetched: updatedTime,
      loading: false,
      fbError: true,
      fbErrorMsg: null
    })
  }),

  on(issueActions.loadAllIssuesStart, (state, {url}) => {
    return {
      ...state,
      loading: true,
      fbError: false,
      fbErrorMsg: null
    }
  }),

  on(issueActions.loadAllIssuesFailed, (state, {errMsg}) => {
    return {
      ...state,
      loading: false,
      fbError: true,
      fbErrorMsg: errMsg
    }
  })


)

export function issuesEntityReducer(state: IssueEntityState | undefined, action: Action) {
  return issueEntityReducer(state, action);
}
