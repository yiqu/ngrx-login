import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { AppState } from 'src/app/stores/global/app.reducer';
import { Store } from '@ngrx/store';
import * as fromIssueActions from '../../stores/issue/issue.actions';
import { IIssue } from '../models/general.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore, private store: Store<AppState>) {
  }

  createDocument<T>(data: T, url: string) {
    const doc = this.afs.doc<T>(url);
    return doc.set(data);
  }

  createDocId(): string {
    return this.afs.createId();
  }

  addNewIssue(issue: IIssue, path: string) {
    this.store.dispatch(fromIssueActions.createIssueStart({data: issue, url: path}));
  }

}
