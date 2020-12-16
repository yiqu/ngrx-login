import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { IIssue } from 'src/app/shared/models/general.model';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import * as fromIssueActions from './issue.actions';
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';
import { Update } from '@ngrx/entity';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { throwError } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import * as firebase from 'firebase/app'
import { CoreService } from 'src/app/shared/services/core.service';


@Injectable()
export class IssueEffects {

  constructor(public actions$: Actions, public ts: ToasterService,
    private cs: CrudService, private cos: CoreService) {
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

  closeAIssue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.closeOneIssueStart),
      exhaustMap((res) => {
        const d: IIssue = res.data;
        const update: Update<IIssue> = {
          id: d.id,
          changes: {
            open: false,
            loading: true
          }
        };
        return this.cs.updatePartialDocument<IIssue>(update, "issues/" + d.id).then(
          (res) => {
            return fromIssueActions.closeOneIssueSuccess({data: d});
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromIssueActions.closeOneIssueFailure({data: d, errMsg: authErrMsg});
          }
        )
      })
    );
  });

  closeAIssueSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.closeOneIssueSuccess),
      mergeMap((res) => {
        const d: IIssue = res.data;
        const update: Update<IIssue> = {
          id: d.id,
          changes: {
            loading: false
          }
        };
        return this.cs.updatePartialDocument<IIssue>(update, "issues/" + d.id).then(
          (res) => {
            this.ts.getSnackbar("Issue closed successfully!");
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            this.ts.getError("Error occured closing issue. " + authErrMsg);
          }
        )
      })
    );
  }, {dispatch: false});

  openAIssue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.openOneIssueStart),
      exhaustMap((res) => {
        const d: IIssue = res.data;
        const update: Update<IIssue> = {
          id: d.id,
          changes: {
            open: true,
            loading: true
          }
        };
        return this.cs.updatePartialDocument<IIssue>(update, "issues/" + d.id).then(
          (res) => {
            return fromIssueActions.openOneIssueSuccess({data: d});
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromIssueActions.openOneIssueFailure({data: d, errMsg: authErrMsg});
          }
        )
      })
    );
  });

  openAIssueSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.openOneIssueSuccess),
      mergeMap((res) => {
        const d: IIssue = res.data;
        const update: Update<IIssue> = {
          id: d.id,
          changes: {
            loading: false
          }
        };
        return this.cs.updatePartialDocument<IIssue>(update, "issues/" + d.id).then(
          (res) => {
            this.ts.getSnackbar("Issue reopened successfully!");
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            this.ts.getError("Error occured closing issue. " + authErrMsg);
          }
        )
      })
    );
  }, {dispatch: false});


  onSuccessfullyCleanup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.createIssueCleanupSuccess),
      tap(() => {
        this.ts.getSnackbar("Issue created successfully");
      })
    );
  }, {dispatch: false});

  onFailedCleanup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.createIssueCleanupFailed),
      tap(() => {
        this.ts.getSnackbar("Error occured creating the issue");
      })
    );
  }, {dispatch: false});

  onDeleteIssue$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.deleteIssueStart),
      exhaustMap((res) => {
        const issueToDelete = res.issue;
        const url = res.url;
        return this.cs.deleteDocument(issueToDelete, url).then(
          (res) => {
            return fromIssueActions.deleteIssueSuccess({issue: issueToDelete});
          },
          (rej) => {
            const authErrMsg = fromFirebaseUtils.getFirebaseErrorMsg(rej);
            return fromIssueActions.deleteIssueFailed({issue: issueToDelete, errMsg: authErrMsg});
          }
        )
      })
    );
  });

  onDeleteIssueSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromIssueActions.deleteIssueSuccess),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      tap((res) => {
        this.ts.getSnackbar("Issue #" + res.issue.issueNumber + " was deleted successfully");
        this.cos.goBackToIssuesPage();
      })
    );
  }, {dispatch: false});

}


export const issuesEffects = [
  IssueEffects
]
