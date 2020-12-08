import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { IIssue } from 'src/app/shared/models/general.model';

const CREATE_ISSUE_START: string = "[Issue Creator/API] Create new issue start";
const CREATE_ISSUE_SUCCESS: string = "[Issue Creator/API] Successfully created a new issue";
const CREATE_ISSUE_FAILURE: string = "[Issue Creator/API] Create new issue failed";

const CREATE_ISSUE_CLEANUP_SUCCESS: string = "[Issue Creator/API] Clean up and set loading to false success";
const CREATE_ISSUE_CLEANUP_FAILURE: string = "[Issue Creator/API] Clean up and set loading to false failed";

const LOAD_ALL_ISSUES_START: string = "[Issue Display/API] Load all issues from database";
const LOAD_ALL_ISSUES_SUCCESS: string = "[Issue Display/API] Load all issues success";
const LOAD_ALL_ISSUES_FAILED: string = "[Issue Display/API] Load all issues failed";

const CLOSE_ISSUE_START: string = "[Issue Detail/API] Close a issue start";
const CLOSE_ISSUE_SUCCESS: string = "[Issue Detail/API] Successfully closed a issue";
const CLOSE_ISSUE_FAILED: string = "[Issue Detail/API] Close a issue faialed";

const OPEN_ISSUE_START: string = "[Issue Detail/API] Open a issue start";
const OPEN_ISSUE_SUCCESS: string = "[Issue Detail/API] Successfully opened a issue";
const OPEN_ISSUE_FAILED: string = "[Issue Detail/API] Open a issue faialed";

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

export const closeOneIssueStart = createAction(
  CLOSE_ISSUE_START,
  props<{data: IIssue}>()
)

export const closeOneIssueSuccess = createAction(
  CLOSE_ISSUE_SUCCESS,
  props<{data: IIssue}>()
)

export const closeOneIssueFailure = createAction(
  CLOSE_ISSUE_FAILED,
  props<{data: IIssue, errMsg: string}>()
)

export const openOneIssueStart = createAction(
  OPEN_ISSUE_START,
  props<{data: IIssue}>()
)

export const openOneIssueSuccess = createAction(
  OPEN_ISSUE_SUCCESS,
  props<{data: IIssue}>()
)

export const openOneIssueFailure = createAction(
  OPEN_ISSUE_FAILED,
  props<{data: IIssue, errMsg: string}>()
)
