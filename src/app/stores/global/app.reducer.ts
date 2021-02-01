import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { appMetaReducer } from '../meta/meta.reducer';
import { MetaState } from '../meta/meta.state';
import { UiState } from '../ui/ui.model';
import * as fromUiReducer from '../ui/ui.reducer';


export interface AppState {
  uiState?: UiState,
  myRouter?: RouterReducerState<any>,
  appMeta: MetaState
}


export const appReducers: ActionReducerMap<AppState> = {
  uiState: fromUiReducer.uiStatesReducer,
  myRouter: routerReducer,
  appMeta: appMetaReducer
}
