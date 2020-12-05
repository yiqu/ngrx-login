import * as fromRouter from '@ngrx/router-store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../global/app.reducer';

export const selectRouter = createFeatureSelector<AppState, fromRouter.RouterReducerState<any>>("myRouter");

export const {
  selectCurrentRoute,   // select the current route
  selectFragment,       // select the current route fragment
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const getQueryParamById = (id: string) => createSelector(
  selectQueryParams,
  (params): string => {
    return params[id];
  }
);

export const selectByParamId = (id: string) => selectQueryParam(id);
