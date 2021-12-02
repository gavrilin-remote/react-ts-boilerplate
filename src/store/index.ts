import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { getEnv, Envs } from '../config';

import { reducers } from './features';

const logger = createLogger({});

export const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: getEnv() === Envs.production ? [thunk] : [logger, thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
