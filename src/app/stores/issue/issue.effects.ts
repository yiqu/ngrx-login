import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, concatMap, switchMap, map, mergeMap, catchError } from 'rxjs/operators';
import { IIssue } from 'src/app/shared/models/general.model';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import * as fromIssueActions from './issue.actions';
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';
import { Update } from '@ngrx/entity';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { throwError } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';

@Injectable()
export class IssueEffects {

  constructor(public actions$: Actions, public ts: ToasterService,
    private cs: CrudService) {
  }

  onAddIssue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.createIssueStart),
      mergeMap((res) => {
        const issue: IIssue = res.data;
        const path: string = res.url;
        return this.cs.createDocument(issue, path).then(
          (res) => {
            const date = new Date().getTime();
            // update created and loading status in reducer state
            const successUpdate : Update<IIssue> = {
              id: issue.id,
              changes: {
                created: true,
                loading: false
              }
            };
            return fromIssueActions.createIssueSuccess({data: successUpdate, dateFinished: date, url: path});
          },
          (rej) => {
            console.log("err: ",rej);
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromIssueActions.createIssueFailed({errMsg: authErrMsg, data: issue});
          }
        )
      })
    );
  });

  onSuccessfullyIssueAdded$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.createIssueSuccess),
      mergeMap((res) => {
        return this.cs.updatePartialDocument<IIssue>(res.data, res.url).then(
          (res) => {
            return fromIssueActions.createIssueCleanupSuccess();
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromIssueActions.createIssueCleanupFailed({errorMsg: authErrMsg});
          }
        )
      })
    );
  });

  loadAllIssues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.loadAllIssuesStart),
      switchMap((res) => {
        const path = res.url;
        return this.cs.readCollections<IIssue>(path).then(
          (res) => {
            let allIssues: IIssue[] = [];
            const currentTime: number = new Date().getTime();
            console.log(res.docs.length)
            res.docs.forEach((d) => {
              allIssues.push(d.data());
            });
            return fromIssueActions.loadAllIssuesSuccess({data: allIssues, updatedTime: currentTime});
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromIssueActions.loadAllIssuesFailed({errMsg: authErrMsg});
          }
        )
      })
    );
  });



  onSuccessfullyCleanup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.createIssueCleanupSuccess),
      tap(() => {
        this.ts.getSnackbar("Issue created successfully!");
      })
    );
  }, {dispatch: false});

  onFailedCleanup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.createIssueCleanupFailed),
      tap(() => {
        this.ts.getSnackbar("Error occured creating the issue!");
      })
    );
  }, {dispatch: false});

}


export const issuesEffects = [
  IssueEffects
]
