import { Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { filter, map } from "rxjs/operators";
import { CoreService } from "src/app/shared/services/core.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { environment } from "src/environments/environment";
import * as fromMetaActions from '../meta/meta.actions';
import { UserAction } from "../meta/meta.state";

@Injectable()
export class AppGlobalEffects {

  constructor(public actions$: Actions, public ts: ToasterService) {
  }

  /**
   * Log all actions taken to state. ONLY ON PRODUCTION
   */
  catchAllUserActions$ = createEffect(() => {
    return this.actions$.pipe(
      filter((action) => {
        if (action.type.startsWith("[")) {
          return true;
        }
        return false;
      }),
      map((res) => {
        let fromLocation = res.type;
        let result = fromLocation.match( /\[(.*?)\]/gm )?.pop();
        let action: UserAction = {
          component: result,
          action: fromLocation.substring(fromLocation.indexOf("]")+1),
          time: new Date().getTime()
        }
        return fromMetaActions.storeAnAction({actionName: action});
      })
    );
  }, {dispatch: environment.production});

}


export const appEffects = [
  AppGlobalEffects
]
