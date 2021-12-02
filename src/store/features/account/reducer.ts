import { AnyAction } from 'redux';
import { AccountState } from 'types';
import { SET_CURRENT_ACCOUNT } from './constants';

const initialState: AccountState = {
  account: undefined,
};

export const AccountReducer = (
  state = initialState,
  action: AnyAction
): AccountState => {
  switch (action.type) {
    case SET_CURRENT_ACCOUNT: {
      return {
        ...state,
        account: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
