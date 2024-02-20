import { cleanup } from '@testing-library/react';
import { AxiosInstance, type AxiosRequestConfig } from 'axios';

import { FAKE_TOKEN, getTokenSilently } from '../../__mocks__/@auth0/auth0-spa-js';
import { CreateAPIInstanceType, METHODS, createAPIInstance } from '../request';
import MockRequest from '../request/mock';

describe('Request: ', () => {
  let factory: CreateAPIInstanceType;
  let apiInstance: AxiosInstance;
  let mock: MockRequest;
  const baseUrl = 'http://localhost/v1';
  getTokenSilently.mockResolvedValue(FAKE_TOKEN);

  beforeEach(() => {
    factory = createAPIInstance({ baseUrl });
    apiInstance = factory.instance;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock = new MockRequest(apiInstance);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.onGet('/test-api-with-orfium-base/').reply(200, {
      hasBeenCalled: true,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.onPost('/test-post/').reply(
      (config: AxiosRequestConfig) => {
        return new Promise(function (resolve) {
          setTimeout(function () {
            const data = JSON.parse(config.data);
            if (data.isOk) resolve([200, { message: 'its OK' }]);
          }, 0);
        });
      },
      {
        hasBeenCalled: true,
      }
    );
  });

  afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.restore();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.restore();
    cleanup();
  });

  xit('correctly sets the adapter on the axios instance', function () {
    expect(apiInstance.defaults.adapter).toBeTruthy();
  });

  xit('correctly sets the base url based on instance factory', async () => {
    expect(apiInstance.defaults.baseURL).toBe(baseUrl);
  });

  xit('correctly passes props to request', async () => {
    const { request } = factory.createRequest({
      method: METHODS.GET,
      url: '/test-api-with-orfium-base/',
    });

    const result = await request();

    expect(result.hasBeenCalled).toBeTruthy();
  });

  xit('correctly uses the params for POST requests', async () => {
    const { request } = factory.createRequest({
      method: METHODS.POST,
      url: '/test-post/',
      params: {
        isOk: true,
      },
    });

    const result = await request();

    expect(result.message).toBe('its OK');
  });

  xit('correctly sets token', async () => {
    factory.setToken('I am groot ');

    expect(apiInstance.defaults.headers.common.Authorization).toBe('Bearer I am groot ');
  });

  xit('correctly removes token', async () => {
    factory.setToken('I am groot ');

    expect(apiInstance.defaults.headers.common.Authorization).toBe('Bearer I am groot ');

    factory.deleteToken();

    expect(apiInstance.defaults.headers.common.Authorization).not.toBeTruthy();
  });
});
