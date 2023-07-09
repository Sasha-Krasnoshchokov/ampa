import axios from 'axios';

import BASE_URL from './baseUrl';

import FORMS from '../data/constants/forms';

import setAxiosAuthHeader from '../helpers/setAxiosAuthHeaders';

const API = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  if (!axios.defaults.headers.common.Authorization && accessToken) {
    setAxiosAuthHeader(accessToken);
  }

  const getData = async ({
    key = '',
    payload = '',
    option = '',
  }) => {
    let response = null;
    if (key && axios.defaults.headers.common.Authorization) {
      try {
        const url = `${BASE_URL}/api/${key}${payload ? `/${payload}` : ''}${option ? `/${option}` : ''}`;
        response = await axios.get(url);
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

  const postData = async (
    key: string,
    payload: { [key: string]: string},
  ) => {
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

  return {
    getData,
    postData,
  };
};

export const fetchingData = () => {
  const { getData } = API();

  const getAzureUser = async (azureId: string) => {
    const azureUserResponse = await getData({
      key: 'Users',
      payload: azureId,
      option: '',
    });
    return azureUserResponse;
  };

  const getOrganizationById = async (id: string) => {
    const promise = getData({
      key: 'Organizations',
      payload: id,
      option: '',
    });
    const response = await promise;
    return response ? response.data : null;
  };

  const getContactsByOrganizationId = async (id: string) => {
    const promise = getData({
      key: 'Organizations',
      payload: id,
      option: 'contacts',
    });
    const response = await promise;
    return response ? response.data : null;
  };

  const getClubs = async (organizations: any[]) => {
    const promises = organizations.map(((item) => (
      getData({
        key: 'Organizations',
        payload: item.id,
        option: '',
      })
    )));
    const responses = await Promise.all(promises);
    const clubs = responses.map((item) => item?.data);

    return clubs.reduce((prev, next) => {
      prev.push(next);
      return prev;
    }, []);
  };

  const getGames = async (organizations: any[]) => {
    const promises = organizations.map(((item) => (
      getData({
        key: 'Organizations',
        payload: item.id,
        option: 'schedules',
      })
    )));
    const responses = await Promise.all(promises);
    const games = responses.map((item) => item?.data);

    return games.reduce((prev, next) => {
      prev.push(...next.games);
      return prev;
    }, []);
  };

  const getTeams = async (organizations: any[]) => {
    const promises = organizations.map(((item) => (
      getData({
        key: 'Teams',
        payload: item.id,
        option: 'organization',
      })
    )));
    const responses = await Promise.all(promises);
    const teams = responses.map((item) => item?.data);

    return teams.reduce((prev, next) => {
      prev.push(...next);
      return prev;
    }, []);
  };

  const getSalesLeads = async () => {
    const response = await getData({
      key: 'SalesLeads',
      payload: '',
      option: '',
    });
    return response?.data;
  };

  const getReferees = async () => {
    const response = await getData({
      key: 'Referees',
      payload: '',
      option: '',
    });
    return response?.data;
  };

  return {
    getAzureUser,
    getClubs,
    getGames,
    getTeams,
    getReferees,
    getSalesLeads,
    getOrganizationById,
    getContactsByOrganizationId,
  };
};

export default API;
