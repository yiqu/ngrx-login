import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { TodoItem } from './todo.state';

const GET_ALL_TODO_ITEMS_START: string = "[Todo/API] Load todo items start";
const GET_ALL_TODO_ITEMS_SUCCESS: string = "[Todo/API] Load todo items success";
const GET_ALL_TODO_ITEMS_FAILED: string = "[Todo/API] Load todo items failed";

const SAVE_ALL_TODO_ITEMS_START: string = "[Todo/API] Save todo items start";
const SAVE_ALL_TODO_ITEMS_SUCCESS: string = "[Todo/API] Save todo items success";
const SAVE_ALL_TODO_ITEMS_FAILED: string = "[Todo/API] Save todo items failed";

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
