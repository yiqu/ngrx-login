import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TodoItem } from './store/todo.state';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoCollection: AngularFirestoreCollection<TodoItem> = this.afs.collection<TodoItem>('todoList');

  constructor(private afs: AngularFirestore) {
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

}
