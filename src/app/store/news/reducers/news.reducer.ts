import { createFeature, createReducer, on } from '@ngrx/store';
import { NewsActions } from '../actions/news.actions';

export const newsFeatureKey = 'news';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(NewsActions.loadNewss, state => state),
  on(NewsActions.loadNewssSuccess, (state, action) => state),
  on(NewsActions.loadNewssFailure, (state, action) => state),
);

export const newsFeature = createFeature({
  name: newsFeatureKey,
  reducer,
});

