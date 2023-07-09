import { AxiosResponse } from 'axios';

const checkResponse: (response: AxiosResponse<unknown, unknown>) => boolean = (response) => {
  if (!response) return false;

  if (response.status >= 200 && response.status < 300) return true;

  return false;
};

export default checkResponse;
