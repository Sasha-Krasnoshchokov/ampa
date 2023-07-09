import axios from 'axios';
import BASE_URL from './baseUrl';

const unsubscribe = async (email: string) => {
  const response = await axios.delete(`${BASE_URL}/api/Accounts/${email}/unsubscribe`);

  return response;
};

export default unsubscribe;
