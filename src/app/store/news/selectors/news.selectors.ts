import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNews from '../reducers/news.reducer';

export const selectNewsState = createFeatureSelector<fromNews.State>(
  fromNews.newsFeatureKey
);
