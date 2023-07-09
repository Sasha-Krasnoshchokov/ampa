import axios from 'axios';

import BASE_URL from './baseUrl';

import FORMS from '../data/constants/forms';

const postData = async (key: string, payload: { [key: string | number]: any } | null) => {
  if (sessionStorage.getItem('accessToken')) {
    axios.defaults.headers.post.Authorization = `Bearer ${sessionStorage.getItem('accessToken')}`;
  }

  const postDataPaths: Record<string, string> = {
    [FORMS.SIGN_UP_CLUB]: 'SalesLeads/salesleads',
    [FORMS.SIGN_UP_REFEREE]: 'Accounts',
    [FORMS.CREATE_ACCOUNT]: 'Accounts',
    [FORMS.EDIT_GAME]: `Organizations/${payload?.organizationId}/games`,
    [FORMS.INVITATION]: 'Organizations/invite',
    [FORMS.ASSIGN_REFEREE]: `Booking/${payload?.gameId}/assign/${payload?.refereeId}`,
    [FORMS.EDIT_RATES]: `Organizations/${payload?.organizationId}/rates`,
    [FORMS.EDIT_VENUES]: `Organizations/${payload?.organizationId}/venues`,
    [FORMS.EDIT_CONTACTS]: `Organizations/${payload?.organizationId}/contacts`,
    [FORMS.REFEREE_ASSIGNMENT_OPTION]: `Referees/${payload?.refereeId}/assigmentoption`,
    [FORMS.EDIT_TEAM]: 'Teams',
  };

  let response = null;

  if (postDataPaths[key] && payload) {
    try {
      response = await axios
        .post(
          `${BASE_URL}/api/${postDataPaths[key]}`,
          payload,
        );
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

export default postData;
