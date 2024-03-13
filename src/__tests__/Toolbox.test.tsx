import { Auth0Client } from '@auth0/auth0-spa-js';
import { ThemeProvider } from '@orfium/ictinus';
import { cleanup, render, waitFor } from '@testing-library/react';
import { getNewFakeToken } from '__mocks__/@auth0/auth0-spa-js';
import MockAdapter from 'axios-mock-adapter';
import { Toolbox } from '~/providers';
import { Authentication } from '~/providers/Authentication';
import { orfiumIdBaseInstance } from '~/request';
import MockRequest from '~/request/mock';
const clientMock = jest.mocked(new Auth0Client({ clientId: '', domain: '' }));
const TestComp = () => {
  return <div data-testid={'test'}>Test</div>;
};

describe('Authentication: ', () => {
  let mock: MockAdapter;
  const apiInstance = orfiumIdBaseInstance.instance;

  beforeEach(() => {
    mock = new MockRequest(apiInstance);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders without crashing', () => {
    render(
      <Authentication>
        <TestComp />
      </Authentication>
    );
  });

  it('renders the test component', async () => {
    clientMock.getTokenSilently.mockResolvedValue(getNewFakeToken());
    jest.mock('../store/useUser', () => ({
      __esModule: true,
      default: {
        user: {},
      },
    }));
    clientMock.isAuthenticated.mockResolvedValue(true);
    clientMock.getUser.mockResolvedValue({
      name: 'John Doe',
      updated_at: new Date().toDateString(),
    });
    mock.onGet('/memberships/').reply(200, [{ org_id: 'a' }]);

    const { findByTestId } = render(
      <Authentication>
        <TestComp />
      </Authentication>
    );

    // expect(await findByTestId('orfium-auth-loading')).toBeTruthy();

    expect(
      await findByTestId('test', undefined, {
        timeout: 3000,
      })
    ).toBeTruthy();
  });

  it('redirects to login if not authenticated', async () => {
    clientMock.isAuthenticated.mockResolvedValue(false);
    clientMock.getTokenSilently.mockResolvedValue(getNewFakeToken());
    mock.onGet('/memberships/').replyOnce(200, []);

    render(
      <Authentication>
        <TestComp />
      </Authentication>
    );

    await waitFor(() => expect(clientMock.loginWithRedirect).toHaveBeenCalled());
  });

  describe('Toolbox messages', () => {
    beforeEach(() => {
      clientMock.getTokenSilently.mockResolvedValue(getNewFakeToken());
      clientMock.isAuthenticated.mockResolvedValue(true);
      clientMock.getUser.mockResolvedValue({
        name: 'John Doe',
        updated_at: new Date().toDateString(),
      });
      mock.onGet('/memberships/').replyOnce(200, []);
      mock.onGet('/products/').replyOnce(200, []);
    });

    it('renders the loading while its authenticating', async () => {
      const { findByTestId } = render(
        <ThemeProvider>
          <Toolbox>
            <TestComp />
          </Toolbox>
        </ThemeProvider>
      );
      expect(await findByTestId('orfium-auth-loading', undefined, { timeout: 1000 })).toBeTruthy();
    });

    it('renders the no organization message when it should', async () => {
      const { findByTestId } = render(
        <ThemeProvider>
          <Toolbox>
            <TestComp />
          </Toolbox>
        </ThemeProvider>
      );

      expect(await findByTestId('orfium-auth-loading')).toBeTruthy();
      expect(await findByTestId('orfium-no-organizations')).toBeTruthy();
    });
  });
});
