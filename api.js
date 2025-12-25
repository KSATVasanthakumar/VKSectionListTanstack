import axios from 'axios';
import { BASE_PUBLIC_URL } from '@env';

export const getUsers = async () => {
  console.log(BASE_PUBLIC_URL);

  const response = await axios.get(`${BASE_PUBLIC_URL}/todos`);
  const data = await response.data;
  return data;
};
