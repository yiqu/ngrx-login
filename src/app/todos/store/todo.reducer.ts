import { EntityState, createEntityAdapter, Update, EntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { TodoItem, ToggleStatus } from './todo.state';
import * as fromTodoActions from './todo.actions';

export interface TodoEntityState extends EntityState<TodoItem> {
  apiLoading: boolean;
  editLoading: boolean;
  error?: boolean;
  errMsg?: string;
  selectedIds: {[key: string]: boolean};
  lastFetched?: number;
  itemsToUpdate?: Update<TodoItem>[];
}

export function selectId(i: TodoItem) {
  return i.id;
}
export function comparator(a: TodoItem, b: TodoItem) {
  if (a.dateCreated && b.dateCreated) {
    if (a.dateCreated === b.dateCreated) {
      return a.title > b.title ? 1 : -1;
    }
    return a.dateCreated > b.dateCreated ? 1 : -1;
  }
  return 1;
}

export const adapter: EntityAdapter<TodoItem> = createEntityAdapter<TodoItem>({
  selectId: selectId,
  sortComparer: comparator
})

export const inititalState: TodoEntityState = adapter.getInitialState({
  apiLoading: false,
  editLoading: false,
  selectedIds: {},
  lastFetched: 0,
  itemsToUpdate: []
});


export const todoEntityReducer = createReducer(
  inititalState,

  on(fromTodoActions.getAllItemsStart, (state, { params }) => {
    return {
      ...state,
      apiLoading: true,
    }
  }),

  on(fromTodoActions.getAllItemsSuccess, (state, { data, fetchTime }) => {
    return adapter.setAll(data, {
      ...state,
      apiLoading: false,
      errMsg: undefined,
      error: false,
      lastFetched: fetchTime
    });
  }),

  on(fromTodoActions.getAllItemsFailed, (state, { errMsg }) => {
    return {
      ...state,
      apiLoading: false,
      errMsg,
      error: true
    }
  }),

  on(fromTodoActions.toggleTodoItemSelection, (state, { ids, toggle }) => {
    const idsDict: {[key: string]: boolean} = {};
    if (toggle) {
      if (toggle === ToggleStatus.ALL) {
        state.ids.forEach((id) => {
          idsDict[id] = true;
        });
      }
    } else {
      if (ids && ids.length > 0) {
        ids.forEach((id) => {
          idsDict[id] = true;
        });
      }
    }

    return {
      ...state,
      selectedIds: idsDict
    }
  }),

  on(fromTodoActions.editItemStart, (state, { item }) => {
    return adapter.updateOne(item, {
      ...state,
      editLoading: true
    })
  }),

  on(fromTodoActions.editItemSuccess, (state, { time }) => {
    return {
      ...state,
      editLoading: false,
      error: false,
      errMsg: undefined
    }
  }),

  on(fromTodoActions.editItemFailed, (state, { errMsg }) => {
    return {
      ...state,
      editLoading: false,
      errMsg,
      error: true
    }
  }),

  on(fromTodoActions.executeMarkAsAction, (state) => {
    const itemsWithDoneStatus: TodoItem[] = state.ids.map((id) => {
      return {
        ...state.entities[id] as TodoItem,
        selected: state.selectedIds[id] ?? false
      }
    });

    const shouldMarkAsDone = itemsWithDoneStatus.some((sel: TodoItem) => {
      return sel.selected && !sel.isFinished;
    });

    const itemsToUpdate: Update<TodoItem>[] = [];
    itemsWithDoneStatus.forEach((item: TodoItem) => {
      if (item.selected) {
        const newState: Partial<TodoItem> = {
          isFinished: shouldMarkAsDone
        }
        itemsToUpdate.push({
          id: item.id,
          changes: newState
        });
      }
    });
    return adapter.updateMany(itemsToUpdate, {
      ...state,
      itemsToUpdate
    });
  })

)

export function todoItemsEntityReducer(state: TodoEntityState | undefined, action: Action) {
  return todoEntityReducer(state, action);
}
