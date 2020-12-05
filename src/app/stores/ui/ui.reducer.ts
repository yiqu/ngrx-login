import { Action, createReducer, on } from '@ngrx/store';
import * as fromUiActions from './ui.actions';
import { UiState } from './ui.model';


/**
 * UI Initial State
 */
const inititalState: UiState = {
  newIssuePaneToggle: false
}

export const uiStateReducer = createReducer(
  inititalState,

  on(fromUiActions.toggleNewIssuePane, (state, {open}) => {
    return {
      ...state,
      newIssuePaneToggle: open
    }
  })

)


export function uiStatesReducer(state: UiState | undefined, action: Action) {
  return uiStateReducer(state, action);
}
