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
    // this.readCollections(ISSUES_PATH).onSnapshot(
    //   (res) => {
    //   },
    //   (err) => {
    //   }
    // )
  }

  createDocument<T>(data: T, url: string): Promise<void> {
    const doc = this.afs.doc<T>(url);
    return doc.set(data);
  }

  createDocId(): string {
    return this.afs.createId();
  }

  updatePartialDocument<T>(part: Update<T>, url: string): Promise<void> {
    const doc = this.afs.doc<T>(url);
    const data = part.changes;
    return doc.update(data);
  }

  // readCollections(url: string): Observable<DocumentChangeAction<IIssue>[]> {
  //   const collection: AngularFirestoreCollection<IIssue> = this.afs.collection<IIssue>(url);
  //   return collection.snapshotChanges().pipe(
  //     take(1)
  //   );
  // }

  readCollections(url: string): Promise<firebase.default.firestore.QuerySnapshot<IIssue>> {
    const collection: AngularFirestoreCollection<IIssue> = this.afs.collection<IIssue>(url);
    return collection.ref.orderBy("dateCreated").get();
  }

  addNewIssue(issue: IIssue, path: string): void {
    this.store.dispatch(fromIssueActions.createIssueStart({data: issue, url: path}));
  }

}
