import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';


// Log all Actions from ngrx
export function logUserActions(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    if (action.type.startsWith("[")) {
      console.log('state:', state);
      console.log('action:', action.type);
    }

    return reducer(state, action);
  };
}

export function logNgRxActions(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    if (action.type.startsWith("@ngrx")) {
      console.log('state:', state);
      console.log('action:', action.type);
    }

    return reducer(state, action);
  };
}

export let metaReducers: MetaReducer<any>[] = [];

if (environment.reduxMetaLogUserActions) {
  metaReducers.push(logUserActions);
}
if (environment.reduxMetaLogNgrxActions) {
  metaReducers.push(logNgRxActions);
}
