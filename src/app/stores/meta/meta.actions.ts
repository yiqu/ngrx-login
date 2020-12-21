import { createAction, props } from '@ngrx/store';
import { UserAction } from './meta.state';

const STORE_A_ACTION: string = "(Meta/Store an action) Store an action";
const TOGGLE_META_POPOUT: string = "[Meta/Toggle Meta Popout] Toggle meta popout dialog";

export const storeAnAction = createAction(
  STORE_A_ACTION,
  props<{actionName: UserAction}>()
)

export const toggleMetaPopout = createAction(
  TOGGLE_META_POPOUT
)
