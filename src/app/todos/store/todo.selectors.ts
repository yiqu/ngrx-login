import {createFeatureSelector, createSelector} from '@ngrx/store';
import { TodoEntityState } from './todo.reducer';
import * as fromTodoReducer from './todo.reducer';
import { SelectedIds, TodoItem } from './todo.state';
import { Update } from '@ngrx/entity';

export const selectTodoFeature = createFeatureSelector<TodoEntityState>("todo");

export const selectIds = createSelector(
  selectTodoFeature,
  fromTodoReducer.adapter.getSelectors().selectIds
);

export const selectEntities = createSelector(
  selectTodoFeature,
  fromTodoReducer.adapter.getSelectors().selectEntities
);

export const selectAllTodoItems = createSelector(
  selectTodoFeature,
  fromTodoReducer.adapter.getSelectors().selectAll
);

export const selectTotalCount = createSelector(
  selectTodoFeature,
  fromTodoReducer.adapter.getSelectors().selectTotal
);

export const selectIsApiLoading = createSelector(
  selectTodoFeature,
  (state): boolean => {
    return state.apiLoading;
  }
);

export const selectCurrentlySelectedIds = createSelector(
  selectTodoFeature,
  (state): SelectedIds => {
    return state.selectedIds;
  }
);

export const allTodoItemsWithSelectedProperty = createSelector(
  selectAllTodoItems,
  selectCurrentlySelectedIds,
  (state: TodoItem[], selectedIds: SelectedIds): TodoItem[] => {
    const updated =  state.map((item: TodoItem) => {
      return {
        ...item,
        selected: selectedIds[item.id] ?? false
      }
    });
    return updated;
  }
)

export const selectLastFetchedTime = createSelector(
  selectTodoFeature,
  (state): number => {
    return state.lastFetched ?? 0;
  }
);



export const currentlySelectedIdsLength = createSelector(
  selectCurrentlySelectedIds,
  (state): number => {
    if (state) {
      return Object.keys(state).length;
    }
    return 0;
  }
);

export const isItemSelected = (id: string | undefined) => createSelector(
  selectCurrentlySelectedIds,
  (selectedIds): boolean => {
    return id ? selectedIds[id] : false;
  }
);

export const isToggleIndeterminate = createSelector(
  selectIds,
  currentlySelectedIdsLength,
  (state: string[] | number[], selectedIdsLength: number): boolean => {
    if (selectedIdsLength === 0 || selectedIdsLength === state.length) {
      return false;
    }
    if ((selectedIdsLength > 0) && (selectedIdsLength < state.length)) {
      return true;
    }
    return false;
  }
);

export const isToggleAllChecked = createSelector(
  selectIds,
  currentlySelectedIdsLength,
  (state: string[] | number[], selectedIdsLength: number): boolean => {
    if (selectedIdsLength === state.length) {
      return true;
    }
    return false;
  }
);


export const getToggleActionShouldMarkDone = createSelector(
  allTodoItemsWithSelectedProperty,
  (allItems: TodoItem[]): boolean => {
    const result = allItems.some((sel: TodoItem) => {
      return sel.selected && !sel.isFinished;
    });
    return result;
  }
);

export const getItemsToUpdate = createSelector(
  selectTodoFeature,
  (state): Update<TodoItem>[] => {
    return state.itemsToUpdate ?? [];
  }
);
