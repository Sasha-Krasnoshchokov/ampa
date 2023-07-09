import axios from 'axios';

const setAxiosAuthHeader = (accessToken: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export default setAxiosAuthHeader;
