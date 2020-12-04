import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap, concatMap, switchMap, map, mergeMap } from 'rxjs/operators';
import { IIssue } from 'src/app/shared/models/general.model';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import * as fromIssueActions from './issue.actions';
import * as fromFirebaseUtils from '../../shared/services/firebase.utils';

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
            console.log("success", res);
            const date = new Date().getTime();
            return fromIssueActions.createIssueSuccess({dateFinished: date});
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

}


export const issuesEffects = [
  IssueEffects
]
