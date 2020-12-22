import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IssueDetailEditComponent } from 'src/app/core/issue-detail/edit/edit.component';
import { WindoConfirmService } from '../services/confirm.service';

/**
 * Generic component with canDeactivate method
 */
export interface CanComponentDeactivate {
 canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * Reuseable can deactivate guard
 * Implement canDeactivate() method in the component to use this guard
 */
@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}



/**
 * Component specific deactivate guard
 */
@Injectable({
  providedIn: 'root',
})
export class CanDeactivateEditComponentGuard implements CanDeactivate<IssueDetailEditComponent> {

  constructor(private cs: WindoConfirmService) {

  }

  canDeactivate(component: IssueDetailEditComponent, route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    if (component.issueCreator && component.issueCreator.changesSaved) {
      return true;
    }
    return this.cs.confirm("There are unsaved changes, would you like to navigate away?");
  }
}
