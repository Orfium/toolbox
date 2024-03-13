import { createAuth0Client as mockedCreateAuth0 } from '__mocks__/@auth0/auth0-spa-js';
import { getAuth0Client, logoutAuth } from '~/utils/auth';

test('getAuth0Client failed process', async () => {
  expect.assertions(1);
  mockedCreateAuth0.mockImplementation(() => {
    throw new Error();
  });

  try {
    await getAuth0Client();
  } catch (e) {
    expect(e).toEqual(new Error(`getAuth0Client Error: Error`));
  }
});

test('logoutAuth failed process', async () => {
  expect.assertions(1);
  // @ts-ignore make logout fail with no .logout property on client
  mockedCreateAuth0.mockImplementation(() => {
    return {};
  });

  try {
    await logoutAuth();
  } catch (e) {
    expect(e).toEqual(new Error(`client_1.logout is not a function`));
  }
});
