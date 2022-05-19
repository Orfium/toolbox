import { AxiosInstance } from 'axios';

import createAPIInstance from './index';
import MockRequest from './mock';

describe('Layout', () => {
  let apiInstance: AxiosInstance;
  let __mock: MockRequest;
  const baseUrl = 'http://localhost/v1';

  beforeEach(() => {
    apiInstance = createAPIInstance({ baseUrl }).instance;
    __mock = new MockRequest(apiInstance);
  });

  it('correctly sets the adapter on the axios instance', function () {
    expect(apiInstance.defaults.adapter).toBeTruthy();
  });

  it('correctly sets the base url based on instance factory', async () => {
    expect(apiInstance.defaults.baseURL).toBe(baseUrl);
  });
});
