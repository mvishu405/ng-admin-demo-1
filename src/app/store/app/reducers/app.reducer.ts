import { createFeature, createReducer, on } from '@ngrx/store';
import { AppActions } from '../actions/app.actions';

export const appFeatureKey = 'app';

export interface State {
    name: string;
}

export const initialState: State = {
    name: 'NgRx Demo',
};

export const reducer = createReducer(
    initialState,
    on(AppActions.loadApps, (state) => state),
    on(AppActions.loadAppsSuccess, (state, action) => state),
    on(AppActions.loadAppsFailure, (state, action) => state)
);

export const appFeature = createFeature({
    name: appFeatureKey,
    reducer,
});
