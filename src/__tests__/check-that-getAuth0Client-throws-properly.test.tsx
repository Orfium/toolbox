import { Mock } from 'vitest';
import { getAuth0Client } from '~/utils/auth';

describe('Auth0Client Errors Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('getAuth0Client failed process', async () => {
    expect.assertions(1);

    ((await vi.importMock('@auth0/auth0-spa-js')).Auth0Client as Mock).mockImplementation(() => {
      throw new Error();
    });

    try {
      getAuth0Client(true);
    } catch (e) {
      expect(e).toEqual(new Error(`getAuth0Client Error: Error`));
    }
  });
});
