import axios from 'axios';
import BASE_URL from './baseUrl';

type Props = {
  key: string;
  payload: null | string;
  option: string;
};

const getData = async (props: Props) => {
  const {
    key = '',
    payload = null,
    option = '',
  } = props;

  if (sessionStorage.getItem('accessToken')) {
    axios.defaults.headers.get.Authorization = `Bearer ${sessionStorage.getItem('accessToken')}`;
  }

  let response = null;
  if (key) {
    try {
      response = await axios.get(`${BASE_URL}/api/${key}/${payload}${option}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        response = error.response;
        console.error(response);
      } else {
        console.error(error);
      }
    }
  }

  return response;
};

export default getData;
