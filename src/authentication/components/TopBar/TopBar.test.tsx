import { ThemeProvider } from '@orfium/ictinus';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClient } from 'react-query';

// @ts-ignore
import { orfiumIdBaseInstance } from '../../../request';
import MockRequest from '../../../request/mock';
import { Organization } from '../../../store/organizations';
import { TopBarWithInjectedProps } from './TopBar';

const mockOrganizations: Record<string, Organization> = {
  org_cEVFmcCb0XYz1ZPf: {
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
  org_cEVFmcCb0XYF4Hpp: {
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
};

const mockOrganizationsList = ['org_cEVFmcCb0XYz1ZPf', 'org_cEVFmcCb0XYF4Hpp'];

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

jest.mock('../../../store/organizations', () =>
  jest.fn(() => ({
    organizations: mockOrganizations,
    organizationsList: mockOrganizationsList,
    setSelectedOrganization: mockSetSelectedOrganization,
    selectedOrganization: mockOrganizations[mockOrganizationsList[0]],
  }))
);

// jest.mock('../../context', () => ({
//   useAuthentication: () => ({
//     user: mockedUserFn(),
//     logout: mockLogout,
//   }),
//   getAuth0Client: mockedCreateAuth0,
// }));

describe('TopBar', () => {
  const apiInstance = orfiumIdBaseInstance.instance;
  const mock: MockRequest = new MockRequest(apiInstance);
  let queryClient: QueryClient;

  beforeEach(() => {
    queryClient = new QueryClient();
    mock.onGet('/products/').reply(200, [
      {
        name: 'string',
        organization_usage: 'string',
        client_metadata: {
          product_code: 'string',
        },
        logo_url: 'string',
        login_url: 'string',
      },
    ]);
    mock.onGet('/memberships/').reply(
      200,
      mockOrganizationsList.map((x) => mockOrganizations[x])
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
    mock.reset();
  });

  it('Renders TopBar with organization selected', () => {
    const selectedOrg = mockOrganizations[mockOrganizationsList[0]];
    const { getByText } = render(
      <ThemeProvider>
        <TopBarWithInjectedProps
          user={mockedUser}
          logout={mockLogout}
          selectedOrganization={mockOrganizations[mockOrganizationsList[0]]}
          organizations={mockOrganizationsList.map((x) => mockOrganizations[x])}
          switchOrganization={jest.fn()}
          logoIcon={<img />}
          onMenuIconClick={() => {}}
        />
      </ThemeProvider>
    );

    expect(getByText(selectedOrg.display_name)).toBeTruthy();
  });

  it('Change οrganization will trigger on select', async () => {
    const selectedOrg = mockOrganizations[mockOrganizationsList[0]];
    const mockedSwitchOrg = jest.fn();
    const { getByText, getByTestId } = render(
      <ThemeProvider>
        <TopBarWithInjectedProps
          user={mockedUser}
          logout={mockLogout}
          selectedOrganization={mockOrganizations[mockOrganizationsList[0]]}
          organizations={mockOrganizationsList.map((x) => mockOrganizations[x])}
          switchOrganization={mockedSwitchOrg}
          logoIcon={<img />}
          onMenuIconClick={() => {}}
        />
      </ThemeProvider>
    );

    fireEvent.click(getByText(selectedOrg.display_name));
    fireEvent.click(getByTestId('ictinus_list_item_0'));

    await waitFor(() => expect(mockedSwitchOrg).toBeCalledTimes(1));
  });

  describe('user data', function () {
    it('Renders TopBar user from the data given', () => {
      const mockedSwitchOrg = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <TopBarWithInjectedProps
            user={mockedUser}
            logout={mockLogout}
            selectedOrganization={mockOrganizations[mockOrganizationsList[0]]}
            organizations={mockOrganizationsList.map((x) => mockOrganizations[x])}
            switchOrganization={mockedSwitchOrg}
            logoIcon={<img />}
            onMenuIconClick={() => {}}
          />
        </ThemeProvider>
      );

      expect(getByText(mockedUser.name)).toBeTruthy();
      expect(
        getByText(`${mockedUser?.given_name?.charAt(0)}${mockedUser?.family_name?.charAt(0)}`)
      ).toBeTruthy();
    });

    it('Renders TopBar user from the undefined data', () => {
      const mockedSwitchOrg = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <TopBarWithInjectedProps
            user={undefined}
            logout={mockLogout}
            selectedOrganization={mockOrganizations[mockOrganizationsList[0]]}
            organizations={mockOrganizationsList.map((x) => mockOrganizations[x])}
            switchOrganization={mockedSwitchOrg}
            logoIcon={<img />}
            onMenuIconClick={() => {}}
          />
        </ThemeProvider>
      );

      expect(getByText('undefined')).toBeTruthy();
    });
  });

  it('Logout the user when press logout', async () => {
    const selectedOrg = mockOrganizations[mockOrganizationsList[0]];
    const mockedSwitchOrg = jest.fn();
    const { getByText, getByTestId } = render(
      <ThemeProvider>
        <TopBarWithInjectedProps
          user={mockedUser}
          logout={mockLogout}
          selectedOrganization={mockOrganizations[mockOrganizationsList[0]]}
          organizations={mockOrganizationsList.map((x) => mockOrganizations[x])}
          switchOrganization={mockedSwitchOrg}
          logoIcon={<img />}
          onMenuIconClick={() => {}}
        />
      </ThemeProvider>
    );

    const userMenu = getByTestId('userMenu')?.firstChild;
    userMenu && fireEvent.click(userMenu);
    fireEvent.click(getByText('Logout'));

    await waitFor(() => expect(mockLogout).toBeCalledTimes(1));
  });
});
