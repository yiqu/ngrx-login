import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../stores/global/app.reducer';
import { TodoItem, ToggleStatus } from './store/todo.state';
import * as fromTodoSelectors from './store/todo.selectors';
import * as fromTodoActions from './store/todo.actions';
import { Update } from '@ngrx/entity';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoCollection: AngularFirestoreCollection<TodoItem> = this.afs.collection<TodoItem>('todoList');
  public allTodoItems$: Observable<TodoItem[]> = this.store.select(fromTodoSelectors.allTodoItemsWithSelectedProperty);
  public selectedIds$: Observable<{[key: string]: boolean}> = this.store.select(fromTodoSelectors.selectCurrentlySelectedIds);
  public lastFetchedTime$: Observable<number> = this.store.select(fromTodoSelectors.selectLastFetchedTime);
  public isItemSelectedById =
    (id: string | undefined): Observable<boolean> => this.store.select(fromTodoSelectors.isItemSelected(id));
  public isLoading$: Observable<boolean> = this.store.select(fromTodoSelectors.selectIsApiLoading)
  public isToggleIndeterminate$: Observable<boolean> = this.store.select(fromTodoSelectors.isToggleIndeterminate);
  public isToggleAllChecked$: Observable<boolean> = this.store.select(fromTodoSelectors.isToggleAllChecked);
  public shouldToggleActionExecuteDone$: Observable<boolean> = this.store.select(fromTodoSelectors.getToggleActionShouldMarkDone);
  public currentSelectedLength$: Observable<number> = this.store.select(fromTodoSelectors.currentlySelectedIdsLength);
  public itemsToUpdate$: Observable<Update<TodoItem>[]> = this.store.select(fromTodoSelectors.getItemsToUpdate)


  constructor(private afs: AngularFirestore, public store: Store<AppState>) {
  }

  updateItemsSelection(ids: string[], toggle?: ToggleStatus): void {
    this.store.dispatch(fromTodoActions.toggleTodoItemSelection({ids: ids, toggle}));
  }

  editItem(id: string, item: Partial<TodoItem>): void {
    const toSave: Update<TodoItem> = {
      id: id,
      changes: {
        ...item
      }
    };
    this.store.dispatch(fromTodoActions.editItemStart({item: toSave}));
  }

  createFakeItems(): void {
    for (let i =0; i<5; i++) {
      const id = this.afs.createId();
      const doc = this.todoCollection.doc(id);
      doc.set({
        id,
        content: 'Get this done soon!',
        dateCreated: new Date().getTime(),
        isFinished: false,
        title: 'Item #' + i
      });
    }
  }

  onMarkActionClick() {
    this.store.dispatch(fromTodoActions.executeMarkAsAction());
  }

}
