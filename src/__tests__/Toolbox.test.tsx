import { cleanup, render, waitFor } from '@testing-library/react';

import { Authentication } from '~/providers/Authentication';
import { orfiumIdBaseInstance } from '~/request';
import MockRequest from '~/request/mock';
import {
  getNewFakeToken,
  getTokenSilently,
  getUser,
  isAuthenticated,
  loginWithRedirect,
} from '../../__mocks__/@auth0/auth0-spa-js';
const TestComp = () => {
  return <div data-testid={'test'}>Test</div>;
};

describe('Authentication: ', () => {
  let mock: MockRequest;
  const apiInstance = orfiumIdBaseInstance.instance;

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock = new MockRequest(apiInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  xit('renders without crashing', () => {
    render(
      <Authentication>
        <TestComp />
      </Authentication>
    );
  });

  xit('renders the test component', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    jest.mock('../store/useUser', () => ({
      __esModule: true,
      default: {
        user: {},
      },
    }));
    isAuthenticated.mockResolvedValue(true);
    getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.onGet('/memberships/').reply(200, [{ org_id: 'a' }]);

    const { findByTestId } = render(
      <Authentication>
        <TestComp />
      </Authentication>
    );

    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();

    expect(
      await findByTestId('test', undefined, {
        timeout: 3000,
      })
    ).toBeTruthy();
  });

  xit('redirects to login if not authenticated', async () => {
    isAuthenticated.mockResolvedValue(false);
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.onGet('/memberships/').replyOnce(200, []);

    render(
      <Authentication>
        <TestComp />
      </Authentication>
    );

    await waitFor(() => expect(loginWithRedirect).toHaveBeenCalled());
  });

  xit('renders the loading while its authenticating', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });
    const { findByTestId } = render(
      <Authentication>
        <TestComp />
      </Authentication>
    );
    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();
  });

  xit('renders the no organization message when it should', async () => {
    getTokenSilently.mockResolvedValue(getNewFakeToken());
    isAuthenticated.mockResolvedValue(true);
    getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    mock.onGet('/memberships/').replyOnce(200, []);

    const { findByTestId } = render(
      <Authentication>
        <TestComp />
      </Authentication>
    );

    expect(await findByTestId('orfium-auth-loading')).toBeTruthy();
    expect(
      await findByTestId('orfium-no-organizations', undefined, {
        timeout: 13000,
      })
    ).toBeTruthy();
  });
});
