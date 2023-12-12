import { httpApiMock } from '@app/api/mocks/http.api.mock';
import { AuthData } from '@app/api/auth.api';
import { initValues } from '@app/components/auth/LoginForm/LoginForm';

import { ServerConfiguration, ThoughtSpotRestApi, createConfiguration } from '@thoughtspot/rest-api-sdk';
import { AuthEventEmitter, AuthStatus, AuthType, init } from '@thoughtspot/visual-embed-sdk';

// const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';
const avatarImg = 'https://avatars.githubusercontent.com/u/141843298?v=4';

const do_init = (email: any, password: any) => {
  init({
    thoughtSpotHost: 'tsurl',
    authType: AuthType.Basic,
    username: email,
    password: password,
    getAuthToken: async () => {
      const config = createConfiguration({
        baseServer: new ServerConfiguration('tsurl', {}),
      });
      const tsRestApiClient = new ThoughtSpotRestApi(config);
      const data = await tsRestApiClient.getFullAccessToken({
        username: email,
        password,
        validity_time_in_sec: 40,
      });

      return data.token;
    },
    autoLogin: true,
  });
};

httpApiMock.onPost('login').reply((config) => {
  const data: AuthData = JSON.parse(config.data || '');
  if (true) {
    return [
      200,
      {
        token: 'bearerToken',
        user: {
          id: 1,
          firstName: 'Prashant',
          lastName: 'Patil',
          imgUrl: avatarImg,
          userName: '@john1989',
          email: {
            name: 'chris.johnson@altence.com',
            verified: false,
          },
          phone: {
            number: '+18143519459',
            verified: true,
          },
          sex: 'male',
          birthday: '01/26/2022',
          lang: 'en',
          country: 'GB',
          city: 'London',
          address1: '14 London Road',
          zipcode: 5211,
          website: 'altence.com',
          socials: {
            twitter: '@altence_team',
            facebook: 'https://facebook.com/groups/1076577369582221',
            linkedin: 'https://linkedin.com/company/altence',
          },
        },
      },
    ];
  }
});

httpApiMock.onPost('signUp').reply(200);

httpApiMock.onPost('forgotPassword').reply(200);

httpApiMock.onPost('verifySecurityCode').reply(200);

httpApiMock.onPost('setNewPassword').reply(200);
