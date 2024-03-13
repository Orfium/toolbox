import { getAuth0Client } from '~/utils/auth';

describe('Auth0Client Errors Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getAuth0Client failed process', async () => {
    expect.assertions(1);

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@auth0/auth0-spa-js').Auth0Client.mockImplementation(() => {
      throw new Error();
    });

    try {
      getAuth0Client(true);
    } catch (e) {
      expect(e).toEqual(new Error(`getAuth0Client Error: Error`));
    }
  });
});
