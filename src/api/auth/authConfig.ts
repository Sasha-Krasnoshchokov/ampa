const AZURE_CLIENT_ID = '2a095d3a-50ce-4407-9ec0-d074d6b40ded';
export const SCOPE = 'https://devampasports.onmicrosoft.com/fafbda0b-9aa9-46b1-8bb7-ccae78b3d07e/read_data';

export const msalConfig = {
  auth: {
    clientId: AZURE_CLIENT_ID,
    authority: 'https://devampasports.b2clogin.com/devampasports.onmicrosoft.com/B2C_1_SignIn',
    knownAuthorities: ['devampasports.b2clogin.com'],
    postLogoutRedirectUri: '/',
    redirectUri: '/',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: [`${SCOPE}`],
};
