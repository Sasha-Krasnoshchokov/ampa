import { useCallback } from 'react';
import { useMsal } from '@azure/msal-react';

import { SCOPE } from '../api/auth/authConfig';

const useGetToken = () => {
  const { instance } = useMsal();

  const getToken = useCallback(async () => {
    let accessToken = null;
    try {
      const redirectResponse = await instance.handleRedirectPromise();
      if (redirectResponse !== null) {
        accessToken = redirectResponse.accessToken;
      } else {
        const account = instance.getAllAccounts()[0];
        const accessTokenRequest = {
          scopes: [`${SCOPE}`],
          account,
        };
        const accessTokenResponse = await instance.acquireTokenSilent(accessTokenRequest);
        accessToken = accessTokenResponse.accessToken;
      }
    } catch (error) {
      console.error('GET TOKEN', error);
    }

    return accessToken;
  }, []);

  return getToken;
};

export default useGetToken;
