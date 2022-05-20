import { AxiosInstance } from 'axios';

import { METHODS } from './index';
import { cleanup } from '@testing-library/react';

import createAPIInstance from './index';
import MockRequest from './mock';

describe('Layout', () => {
  let factory: any;
  let apiInstance: AxiosInstance;
  let mock: MockRequest;
  const baseUrl = 'http://localhost/v1';

  beforeEach(() => {
    factory = createAPIInstance({ baseUrl });
    apiInstance = factory.instance;
    mock = new MockRequest(apiInstance);

    mock.onGet('/test-api-with-orfium-base/').reply(200, {
      hasBeenCalled: true,
    });
    mock.onGet('/test-api-without-orfium-base/').reply(200, {
      hasBeenCalled: true,
    });
    mock.onPost('/test-post/').reply(
      (config) => {
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
    mock.restore();
    mock.restore();
    cleanup();
  });

  it('correctly sets the adapter on the axios instance', function () {
    expect(apiInstance.defaults.adapter).toBeTruthy();
  });

  it('correctly sets the base url based on instance factory', async () => {
    expect(apiInstance.defaults.baseURL).toBe(baseUrl);
  });

  it('correctly passes props to request', async () => {
    let { request } = factory.createRequest(METHODS.GET, '/test-api-with-orfium-base/', {});

    let result = await request();

    expect(result.hasBeenCalled).toBeTruthy();
  });

  it('correctly uses the params for POST requests', async () => {
    let { request } = factory.createRequest(METHODS.POST, '/test-post/', { isOk: true });

    let result = await request();

    expect(result.message).toBe('its OK');
  });

  it('correctly uses the params for POST requests', async () => {
    factory.setToken('I am groot');

    expect(apiInstance.defaults.headers.common.Authorization).toBe('Token I am groot');
  });
});
