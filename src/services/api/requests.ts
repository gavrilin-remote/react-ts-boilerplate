import { api } from './index';

export const getAccount = async (id: string): Promise<Account> => {
  const response = await api.get('/account/' + id);
  return response.data;
};
