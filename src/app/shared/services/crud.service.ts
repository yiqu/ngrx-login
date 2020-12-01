import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private afs: AngularFirestore) {
  }

  createDocument<T>(data: T, url: string) {
    const doc = this.afs.doc<T>(url);
    return doc.set(data);
  }

  createDocId(): string {
    return this.afs.createId();
  }

}
