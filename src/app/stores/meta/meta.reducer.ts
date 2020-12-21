import { createAction, Action, on, createReducer } from "@ngrx/store"
import { MetaState } from "./meta.state"
import * as fromMetaActions from './meta.actions';


const initialState: MetaState = {
  showMetaBox: false,
  allActions: [],
  actionCount: 0
}

export const appMetaReducer = createReducer(
  initialState,
  on(fromMetaActions.storeAnAction, (state, {actionName}) => {
    let count = state.actionCount;
    count++;
    let actions = [...state.allActions];
    actions.push(actionName)

    return {
      ...state,
      actionCount: count,
      allActions: actions
    }
  }),

  on(fromMetaActions.toggleMetaPopout, (state) => {
    return {
      ...state,
      showMetaBox: !state.showMetaBox
    }
  })
)
