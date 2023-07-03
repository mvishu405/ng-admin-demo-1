import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromNews from '../news/reducers/news.reducer';
import * as fromApp from '../app/reducers/app.reducer';

export interface State {
    [fromNews.newsFeatureKey]: fromNews.State;
    [fromApp.appFeatureKey]: fromApp.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromNews.newsFeatureKey]: fromNews.reducer,
    [fromApp.appFeatureKey]: fromApp.reducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
