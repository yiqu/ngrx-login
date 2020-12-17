import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AppState } from 'src/app/stores/global/app.reducer';
import { Store } from '@ngrx/store';
import * as fromIssueActions from '../../stores/issue/issue.actions';
import { IIssue } from '../models/general.model';
import { Update } from '@ngrx/entity';
import { take } from 'rxjs/operators';

const ISSUES_PATH: string = "issues";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore, private store: Store<AppState>) {
    //this.listenForIssueChanges();
  }

  /**
   * NOT BRING USED----------
   * Listen for issue collections changes
   */
  listenForIssueChanges() {
    this.readCollectionsOnChanges<IIssue>(ISSUES_PATH, (res) => {
      console.log(res.size)
      res.docChanges().forEach((doc: firebase.default.firestore.DocumentChange<IIssue>) => {
        console.log(doc.type, doc.doc.data())
        this.updateIssuesStore(doc);
      });
    },
    (err) => {
    },
    () => {
      console.log("issue listenered stopped.")
    });
  }

  updateIssuesStore(doc: firebase.default.firestore.DocumentChange<IIssue>) {
    switch(doc.type) {
      case "added": {
        return;
      }
      case "modified": {
        return;
      }
      case "removed": {
        return;
      }
    }
  }

  createDocument<T>(data: T, url: string): Promise<void> {
    const doc = this.afs.doc<T>(url);
    return doc.set(data);
  }

  createDocId(): string {
    return this.afs.createId();
  }

  /**
   * Update a document
   */
  updatePartialDocument<T>(part: Update<T>, url: string): Promise<void> {
    const doc = this.afs.doc<T>(url);
    const data = part.changes;
    return doc.update(data);
  }

  /**
   * Delete a doc from collection list (issue list)
   */
  deleteDocument<T>(issue: IIssue, url: string = "issues"): Promise<void> {
    const doc = this.afs.collection<T>(url);
    return doc.doc(issue.id).delete();
  }

  /**
   * Get a collection list
   * @param url
   */
  readCollections<T>(url: string, searchTerm: string | null): Promise<firebase.default.firestore.QuerySnapshot<T>> {
    const collection: AngularFirestoreCollection<T> = this.afs.collection<T>(url);
    console.log(searchTerm)
    if (searchTerm) {
      return collection.ref
      .where("description", ">=", searchTerm)
      .get();
    }
    return collection.ref
      .orderBy("dateCreated", "desc")
      .get();
  }

  /**
   * Listener for changes
   *
   * @param url
   * @param next
   * @param error
   * @param complete
   */
  readCollectionsOnChanges<T>(url: string, next: (res: firebase.default.firestore.QuerySnapshot<T>)=>void,
    error: (err: firebase.default.firestore.FirestoreError)=>void, complete: ()=>void) {
    const collection: AngularFirestoreCollection<T> = this.afs.collection<T>(url);
    return collection.ref.orderBy("dateCreated", "desc").onSnapshot(next, error, complete);
  }

  addNewIssue(issue: IIssue, path: string): void {
    this.store.dispatch(fromIssueActions.createIssueStart({data: issue, url: path}));
  }


}
