import axios from 'axios';
import BASE_URL from './baseUrl';

const subscribe = async (email: string) => {
  const response = await axios.post(`${BASE_URL}/api/Accounts/${email}/emailsubscription`);

  return response;
};

export default subscribe;
