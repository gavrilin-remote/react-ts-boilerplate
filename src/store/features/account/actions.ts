import { AnyAction } from 'redux';
import { SET_CURRENT_ACCOUNT } from './constants';
import { IAccount } from 'types';

export const setCurrentAccount = (account: IAccount): AnyAction => ({
  type: SET_CURRENT_ACCOUNT,
  payload: account,
});
