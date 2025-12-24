import axios from 'axios';
import { BASE_PUBLIC_URL } from '@env';

export const getUsers = async () => {
  const response = await axios.get(`${BASE_PUBLIC_URL}/users`);
  const data = await response.data;
  return data;
};
