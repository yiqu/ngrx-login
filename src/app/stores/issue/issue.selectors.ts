import {createFeatureSelector, createSelector} from '@ngrx/store';
import { IssueEntityState } from './issue.reducer';
import * as fromIssueReducer from './issue.reducer';

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

export const selectIssueById = (id: string) => createSelector(
  selectIssueEntities,
  (allEntities) => {
    return allEntities[id];
  }
);
