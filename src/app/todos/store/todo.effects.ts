import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect, OnInitEffects } from '@ngrx/effects';
import { concatMap, mergeMap, switchMap } from "rxjs/operators";
import { CrudService } from "src/app/shared/services/crud.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { TodoService } from "../todo.service";
import * as fromListActions from './todo.actions';
import { TodoItem } from "./todo.state";
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';
import { Update } from "@ngrx/entity";

const TODO_PATH: string = 'todoList';

@Injectable()
export class TodoEffects implements OnInitEffects {

  constructor(public actions$: Actions, public ts: ToasterService, public tds: TodoService,
    public crs: CrudService) {
  }

  getAllTodoItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromListActions.getAllItemsStart),
      switchMap((action) => {
        const params = action.params;
        return this.crs.readCollections('todoList', null).then(
          (res) => {
            const allIssues: TodoItem[] = [];
            res.docs.forEach((d) => {
              allIssues.push(d.data() as TodoItem);
            });
            return fromListActions.getAllItemsSuccess({data: allIssues, fetchTime: new Date().getTime()});
          }
        )
        .catch((err) => {
          console.log(err);
          const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(err);
          return fromListActions.getAllItemsFailed({errMsg: authErrMsg});
        })
      })
    );
  });

  editItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromListActions.editItemStart),
      concatMap((actionData) => {
        const itemToUpdate: Update<TodoItem> = actionData.item;
        const url = TODO_PATH + '/' + itemToUpdate.id;
        return this.crs.updatePartialDocument(itemToUpdate, url).then(
          (res) => {
            return fromListActions.editItemSuccess({time: new Date().getTime()});
          }
        )
        .catch((err) => {
          console.log(err);
          const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(err);
          return fromListActions.editItemFailed({errMsg: authErrMsg});
        })
      })
    );
  });


  ngrxOnInitEffects() {
    return fromListActions.getAllItemsStart({params: undefined});
  }
}

export const todoEffects = [
  TodoEffects
]
