import { ThemeProvider } from '@orfium/ictinus';
import { fireEvent, render, waitFor } from '@testing-library/react';

// @ts-ignore
import {
  Auth0Client as mockedCreateAuth0,
  loginWithRedirect,
  logout,
} from '../../../../__mocks__/@auth0/auth0-spa-js';
import { Organization } from '../../../store/useOrganization';
import { Authentication } from '../../index';
const mockOrganizations: Organization[] = [
  {
    org_id: 'org_cEVFmcCb0XYz1ZPf',
    display_name: 'NBCU',
    name: 'nbcu',
    can_administrate: false,
    metadata: {
      type: 'other',
      product_codes: 'media-engagement-tracker',
    },
    branding: {
      logo_url: '',
    },
  },
  {
    org_id: 'org_cEVFmcCb0XYF4Hpp',
    display_name: 'WMG',
    name: 'wmg',
    can_administrate: false,
    metadata: {
      type: 'other',
      product_codes: 'media-engagement-tracker',
    },
    branding: {
      logo_url: '',
    },
  },
];

const mockedUser = {
  name: 'Joe Doe',
  picture: '',
  given_name: 'Joe',
  family_name: 'Doe',
};
const mockedUserFn = jest
  .fn<{ name: string; picture: string; given_name: string; family_name: string } | undefined, []>()
  .mockReturnValue(mockedUser);
const mockSetSelectedOrganization = jest.fn();
const mockLogout = jest.fn();
const mockResetOrganization = jest.fn();

jest.mock('../../../store/useOrganization', () =>
  jest.fn(() => ({
    organizations: mockOrganizations,
    setSelectedOrganization: mockSetSelectedOrganization,
    selectedOrganization: mockOrganizations[0],
    reset: mockResetOrganization,
  }))
);

jest.mock('../../context', () => ({
  useAuthentication: () => ({
    user: mockedUserFn(),
    logout: mockLogout,
  }),
  getAuth0Client: mockedCreateAuth0,
}));

describe('TopBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Renders TopBar with organization selected', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Authentication.TopBar logoIcon={<img />} onMenuIconClick={() => {}} />
      </ThemeProvider>
    );

    expect(getByText(mockOrganizations[0].display_name)).toBeTruthy();
  });

  it('Change οrganization will trigger on select', async () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider>
        <Authentication.TopBar logoIcon={<img />} onMenuIconClick={() => {}} />
      </ThemeProvider>
    );

    fireEvent.click(getByText(mockOrganizations[0].display_name));
    fireEvent.click(getByTestId('ictinus_list_item_0'));

    await waitFor(() => expect(logout).toBeCalledTimes(1));
    await waitFor(() => expect(loginWithRedirect).toBeCalledTimes(1));
    await waitFor(() => expect(mockResetOrganization).toBeCalledTimes(1));
  });

  describe('user data', function () {
    it('Renders TopBar user from the data given', () => {
      const { getByText } = render(
        <ThemeProvider>
          <Authentication.TopBar logoIcon={<img />} onMenuIconClick={() => {}} />
        </ThemeProvider>
      );

      expect(getByText(mockedUser.name)).toBeTruthy();
      expect(
        getByText(`${mockedUser?.given_name?.charAt(0)}${mockedUser?.family_name?.charAt(0)}`)
      ).toBeTruthy();
    });

    it('Renders TopBar user from the undefined data', () => {
      mockedUserFn.mockReturnValue(undefined);

      const { getByText } = render(
        <ThemeProvider>
          <Authentication.TopBar logoIcon={<img />} onMenuIconClick={() => {}} />
        </ThemeProvider>
      );

      expect(getByText('undefined')).toBeTruthy();
    });
  });

  it('Logout the user when press logout', async () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider>
        <Authentication.TopBar logoIcon={<img />} onMenuIconClick={() => {}} />
      </ThemeProvider>
    );

    // @ts-ignore
    const userMenu = getByTestId('userMenu')?.firstChild;
    userMenu && fireEvent.click(userMenu);
    fireEvent.click(getByText('Logout'));

    await waitFor(() => expect(mockLogout).toBeCalledTimes(1));
  });
});
