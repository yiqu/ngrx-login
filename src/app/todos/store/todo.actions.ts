import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { TodoItem, ToggleStatus } from './todo.state';

const GET_ALL_TODO_ITEMS_START: string = "[Todo/API] Load todo items start";
const GET_ALL_TODO_ITEMS_SUCCESS: string = "[Todo/API] Load todo items success";
const GET_ALL_TODO_ITEMS_FAILED: string = "[Todo/API] Load todo items failed";

const SAVE_ALL_TODO_ITEMS_START: string = "[Todo/API] Save todo items start";
const SAVE_ALL_TODO_ITEMS_SUCCESS: string = "[Todo/API] Save todo items success";
const SAVE_ALL_TODO_ITEMS_FAILED: string = "[Todo/API] Save todo items failed";

const TOGGLE_SELECT_ITEM: string = "[Todo/UI] Toggle select a todo item";

const EDIT_TODO_ITEM_START: string = "[Todo/API] Edit todo items start";
const EDIT_TODO_ITEM_SUCCESS: string = "[Todo/API] Edit todo items success";
const EDIT_TODO_ITEM_FAILED: string = "[Todo/API] Edit todo items failed";

export const getAllItemsStart = createAction(
  GET_ALL_TODO_ITEMS_START,
  props<{params?: any}>()
)

export const getAllItemsSuccess = createAction(
  GET_ALL_TODO_ITEMS_SUCCESS,
  props<{data: TodoItem[], fetchTime: number}>()
)

export const getAllItemsFailed = createAction(
  GET_ALL_TODO_ITEMS_FAILED,
  props<{errMsg: string}>()
)

export const saveAllItemsStart = createAction(
  SAVE_ALL_TODO_ITEMS_START,
  props<{data: TodoItem[]}>()
)

export const saveAllItemsSuccess = createAction(
  SAVE_ALL_TODO_ITEMS_SUCCESS,
  props<{data?: TodoItem[]}>()
)

export const saveAllItemsFailed = createAction(
  SAVE_ALL_TODO_ITEMS_FAILED,
  props<{errMsg: string}>()
)

export const editItemStart = createAction(
  EDIT_TODO_ITEM_START,
  props<{item: Update<TodoItem>}>()
)

export const editItemSuccess = createAction(
  EDIT_TODO_ITEM_SUCCESS,
  props<{time: number}>()
)

export const editItemFailed = createAction(
  EDIT_TODO_ITEM_FAILED,
  props<{errMsg: string}>()
)

export const toggleTodoItemSelection = createAction(
  TOGGLE_SELECT_ITEM,
  props<{ids: string[], toggle?: ToggleStatus}>()
)
