import { useCallback } from 'react';
import { useMsal } from '@azure/msal-react';
import { useDispatch } from 'react-redux';

import useGetToken from './useGetToken';

import { setAuth } from '../store/actions/authSlice';
import { setProfile } from '../store/actions/profileSlice';
import { setUserRole } from '../store/actions/userRoleSlice';

import { loginRequest } from '../api/auth/authConfig';
import { fetchingData } from '../api/API';

import setAxiosAuthHeader from '../helpers/setAxiosAuthHeaders';
import checkTokenStatus, { TOKEN_STATUS } from '../helpers/checkTokenStatus';

import { APP_ROLES } from '../data/constants/roles';
import SUPER_ADMIN_NAME from '../data/constants/superAdminName';
import { setPopUp } from '../store/actions/popUpSlice';

const useUserActions = () => {
  const { accounts, instance } = useMsal();
  const dispatch = useDispatch();
  const getToken = useGetToken();

  const {
    getAzureUser,
    getOrganizationById,
  } = fetchingData();

  const logOut = useCallback(() => {
    instance.logout()
      .catch((e: any) => {
        console.error(e);
      });
    sessionStorage.clear();
  }, [instance]);

  const logIn = useCallback(() => {
    instance.loginRedirect(loginRequest);
  }, [instance]);

  const uploadToken = useCallback(async () => {
    let accessToken = sessionStorage.getItem('accessToken');
    const status = checkTokenStatus();

    if (status === TOKEN_STATUS.SUBSTITUTE || status === TOKEN_STATUS.MISSING) {
      accessToken = await getToken();
      if (accessToken) {
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('sessionStarted', (new Date()).toString());
        setAxiosAuthHeader(accessToken);
      }
    }
    if (status === TOKEN_STATUS.OUTSTANDING) {
      dispatch(setPopUp({
        isOpen: true,
        content: 'rejected',
        title: 'Sorry, but you should refresh your session! Please sign in again!',
      }));
      setTimeout(() => {
        logOut();
      }, 3000);
    }

    return accessToken;
  }, [logOut, getToken, dispatch]);

  const uploadAuthData = useCallback(async () => {
    let azureId = sessionStorage.getItem('azureId');
    if (!azureId) {
      azureId = accounts[0].localAccountId;
      if (azureId) {
        sessionStorage.setItem('azureId', azureId);
      } else {
        logIn();
      }
    }

    const accessToken = await uploadToken();

    if (!azureId || !accessToken) {
      sessionStorage.clear();
      return;
    }

    const azureUserResponse = await getAzureUser(azureId);
    if (azureUserResponse?.status === 401) {
      dispatch(setPopUp({
        isOpen: true,
        content: 'rejected',
        title: 'Sorry, but you should refresh your session! Please sign in again!',
      }));
      setTimeout(() => {
        logOut();
      }, 3000);
      return;
    }
    const user: null | any = azureUserResponse?.data || null;

    if (!user) return;

    const { entityType, organizations } = user;
    let userRole = APP_ROLES.GUEST;
    if (entityType === 1) userRole = APP_ROLES.REFEREE;
    if (entityType === 2) userRole = APP_ROLES.ORGANIZATION;
    if (
      entityType === 2 && organizations.some((item: any) => (
        item.name.toLowerCase() === SUPER_ADMIN_NAME.toLocaleLowerCase()
      ))
    ) {
      userRole = APP_ROLES.SUPER_ADMIN;
    }

    let profile = null;
    if (entityType === 2) {
      profile = await getOrganizationById(organizations[0].id);
    }

    if (!profile) return;
    dispatch(setAuth({ token: accessToken, azureId, user }));
    dispatch(setUserRole({ userRole }));
    dispatch(setProfile(profile));
  }, [accounts, logIn, uploadToken, dispatch, getAzureUser, getOrganizationById, logOut]);

  return {
    logIn,
    logOut,
    uploadAuthData,
  };
};

export default useUserActions;
