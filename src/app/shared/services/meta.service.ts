import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/stores/global/app.reducer';
import { UserAction } from 'src/app/stores/meta/meta.state';
import * as metaSelectors from '../../stores/meta/meta.selectors';
import * as fromMetaActions from '../../stores/meta/meta.actions';

@Injectable({
  providedIn: 'root'
})
export class AppMetaService {

  getAllActions$: Observable<UserAction[]> = this.store.select(metaSelectors.getMetaAllActions);
  getAllActionCont$: Observable<number> = this.store.select(metaSelectors.getMetaAllActionsCount);
  getShowMetaPopout$: Observable<boolean> = this.store.select(metaSelectors.getShowMetaPopout);

  constructor(private store: Store<AppState>) {

  }

  toggleActionTracker() {
    this.store.dispatch(fromMetaActions.toggleMetaPopout());
  }

}
