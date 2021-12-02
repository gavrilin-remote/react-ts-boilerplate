import { IAccount, RootState } from 'types';

export const selectCurrentAccount = (
  state: RootState
): IAccount | undefined => {
  return state.account.account;
};
