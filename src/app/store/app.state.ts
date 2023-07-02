// Note
// Now you need to think good way to import and export all the data so in Future you can rename if you need

import { createReducer, createSelector, on } from '@ngrx/store';
import { appInitialized } from './app.actions';

// This name can be State or RootState basis on your thinking
export interface RootState {
    app: AppState;
}

// Contains app related state information
export interface AppState {
    name: string;
}

export const initialState: AppState = {
    name: `Ng Admin`,
};

export const appReducer = createReducer(
    initialState,
    on(appInitialized, (state: AppState) => ({ ...state, name: 'Vishal App' }))
);

export const selectApp = (state: RootState) => state.app;

export const selectAppName = createSelector(
    selectApp,
    (app: AppState) => app.name
);
