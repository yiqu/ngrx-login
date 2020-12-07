import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { IIssue } from 'src/app/shared/models/general.model';

const CREATE_ISSUE_START: string = "[Issue Creator/API] Create new issue start";
const CREATE_ISSUE_SUCCESS: string = "[Issue Creator/API] Create new issue success";
const CREATE_ISSUE_FAILURE: string = "[Issue Creator/API] Create new issue failed";

const CREATE_ISSUE_CLEANUP_SUCCESS: string = "[Issue Creator/API] Clean up and set loading to false success";
const CREATE_ISSUE_CLEANUP_FAILURE: string = "[Issue Creator/API] Clean up and set loading to false failed";

const LOAD_ALL_ISSUES_START: string = "[Issue Display/API] Load all issues from database";
const LOAD_ALL_ISSUES_SUCCESS: string = "[Issue Display/API] Load all issues success";
const LOAD_ALL_ISSUES_FAILED: string = "[Issue Display/API] Load all issues failed";


export const createIssueStart = createAction(
  CREATE_ISSUE_START,
  props<{data: IIssue, url: string}>()
)

export const createIssueSuccess = createAction(
  CREATE_ISSUE_SUCCESS,
  props<{data: Update<IIssue>, dateFinished: number, url: string}>()
)

export const createIssueFailed = createAction(
  CREATE_ISSUE_FAILURE,
  props<{data: IIssue, errMsg: string}>()
)

export const createIssueCleanupSuccess = createAction(
  CREATE_ISSUE_CLEANUP_SUCCESS
)

export const createIssueCleanupFailed = createAction(
  CREATE_ISSUE_CLEANUP_FAILURE,
  props<{errorMsg: string}>()
)

export const loadAllIssuesStart = createAction(
  LOAD_ALL_ISSUES_START,
  props<{url: string}>()
)

export const loadAllIssuesSuccess = createAction(
  LOAD_ALL_ISSUES_SUCCESS,
  props<{data: IIssue[], updatedTime: number}>()
)

export const loadAllIssuesFailed = createAction(
  LOAD_ALL_ISSUES_FAILED,
  props<{errMsg: string}>()
)
