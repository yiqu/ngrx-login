import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MetaState, UserAction } from "./meta.state";

export const selectMetaState = createFeatureSelector<MetaState>("appMeta");

export const getMetaAllActionsCount = createSelector(
  selectMetaState,
  (state: MetaState) => {
    return state.actionCount;
  }
);

export const getMetaAllActions = createSelector(
  selectMetaState,
  (state: MetaState): UserAction[] => {
    return state.allActions;
  }
);


export const getShowMetaPopout = createSelector(
  selectMetaState,
  (state: MetaState): boolean => {
    return state.showMetaBox;
  }
);
