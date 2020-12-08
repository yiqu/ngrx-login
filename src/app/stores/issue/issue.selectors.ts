import {createFeatureSelector, createSelector} from '@ngrx/store';
import { IssueEntityState } from './issue.reducer';
import * as fromIssueReducer from './issue.reducer';
import { IIssue } from 'src/app/shared/models/general.model';
import * as fromRouterSelectors from '../router/router.selectors';

export const selectIssueState = createFeatureSelector<IssueEntityState>("issues");

export const selectIssueIds = createSelector(
  selectIssueState,
  fromIssueReducer.adapter.getSelectors().selectIds
);

export const selectIssueEntities = createSelector(
  selectIssueState,
  fromIssueReducer.adapter.getSelectors().selectEntities
);

export const selectAllIssues = createSelector(
  selectIssueState,
  fromIssueReducer.adapter.getSelectors().selectAll
);

export const selectTotalIssueCount = createSelector(
  selectIssueState,
  fromIssueReducer.adapter.getSelectors().selectTotal
);

export const selectTotalIssueCount2 = createSelector(
  selectIssueState,
  (state) => {
    if (state.ids) {
      return state.ids.length;
    }
    return 0;
  }
);

export const selectIssueById = (id: string | undefined) => createSelector(
  selectIssueEntities,
  (allEntities): IIssue | undefined => {
    return id ? allEntities[id] : undefined;
  }
);

export const getOpenIssueCount = createSelector(
  selectAllIssues,
  (state: IIssue[]): number => {
    return state.reduce((prev, curr) => {
      let count: number = prev;
      if (curr.open) {
        count = count + 1;
      }
      return count;
    }, 0);
  }
)

export const getClosedIssueCount = createSelector(
  selectTotalIssueCount,
  getOpenIssueCount,
  (total, open): number => {
    return total - open;
  }
)

export const getIssueNumber = (id: string | undefined) => createSelector(
  selectIssueById(id),
  (state): number | undefined => {
    return state?.issueNumber;
  }
)

export const getIssueByParamId = (id: string) => createSelector(
  fromRouterSelectors.selectRouteParam(id),
  selectIssueEntities,
  (issueId: string | undefined, state) => {
    if (issueId) {
      return state[issueId];
    }
    return undefined;
  }
)

export const getIssuesOverallLoading = createSelector(
  selectIssueState,
  (state): boolean => {
    return state.loading;
  }
)
