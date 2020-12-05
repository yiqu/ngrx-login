import { createAction, props } from '@ngrx/store';

const TOGGLE_NEW_ISSUE_PANE: string = "[UI/New Issue] Toggle open close new issue pane"

export const toggleNewIssuePane = createAction(
  TOGGLE_NEW_ISSUE_PANE,
  props<{open: boolean}>()
);

