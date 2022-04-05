import MockRequest from './mock';
import createAPIInstance from './index';
import { AxiosInstance } from 'axios';

describe('Layout', () => {
  let apiInstance: AxiosInstance;
  let mock: MockRequest;
  const baseUrl = 'http://localhost/v1';

  beforeEach(() => {
    apiInstance = createAPIInstance({ baseUrl }).instance;
    mock = new MockRequest(apiInstance);
  });

  it('correctly sets the adapter on the axios instance', function () {
    expect(apiInstance.defaults.adapter).toBeTruthy();
  });

  it('correctly sets the base url based on instance factory', async () => {
    expect(apiInstance.defaults.baseURL).toBe(baseUrl);
  });
});
