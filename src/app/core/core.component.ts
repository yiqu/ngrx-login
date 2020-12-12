import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreService } from '../shared/services/core.service';
import { AppState } from '../stores/global/app.reducer';
import * as fromRouterSelectors from '../stores/router/router.selectors';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();

  constructor(private cs: CoreService, private router: Router, private route: ActivatedRoute,
    private store: Store<AppState>) {

  }

  ngOnInit() {
    this.cs.getAllIssues();
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
