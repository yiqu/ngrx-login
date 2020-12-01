import { createAction, props } from '@ngrx/store';
import { IIssue } from 'src/app/shared/models/general.model';

const CREATE_ISSUE_START: string = "[Issue Creator/API] Create new issue start";
const CREATE_ISSUE_SUCCESS: string = "[Issue Creator/API] Create new issue success";
const CREATE_ISSUE_FAILURE: string = "[Issue Creator/API] Create new issue failed";

export const createIssueStart = createAction(
  CREATE_ISSUE_START,
  props<{data: IIssue, url: string}>()
)

export const createIssueSuccess = createAction(
  CREATE_ISSUE_SUCCESS,
  props<{dateFinished: number}>()
)

export const createIssueFailed = createAction(
  CREATE_ISSUE_FAILURE,
  props<{data: IIssue, errMsg: string}>()
)
