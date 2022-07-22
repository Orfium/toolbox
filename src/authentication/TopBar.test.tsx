import { ThemeProvider } from '@orfium/ictinus';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import React from 'react';

import { Organization } from '../store/useOrganization';
import { useAuthentication } from './context';
import { Authentication } from './index';

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
const mockSetSelectedOrganization = jest.fn();
const mockLogout = jest.fn();
let mockUseAuthentication;
let useOrganization;

jest.mock('../store/useOrganization', () =>
  jest.fn(() => ({
    organizations: mockOrganizations,
    setSelectedOrganization: mockSetSelectedOrganization,
    selectedOrganization: mockOrganizations[0],
  }))
);

jest.mock('./context', () => ({
  useAuthentication: () => ({
    user: mockedUser,
    logout: mockLogout,
  }),
}));

describe('TopBar', () => {
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
    fireEvent.click(getByTestId('ictinus_list_item_1'));

    await waitFor(() => expect(mockSetSelectedOrganization).toBeCalledTimes(1));
  });

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

  it('Logout the user when press logout', async () => {
    const { getByText, getByTestId, debug } = render(
      <ThemeProvider>
        <Authentication.TopBar logoIcon={<img />} onMenuIconClick={() => {}} />
      </ThemeProvider>
    );

    const userMenu = getByTestId('userMenu')?.firstChild;
    userMenu && fireEvent.click(userMenu);
    fireEvent.click(getByText('Logout'));

    await waitFor(() => expect(mockLogout).toBeCalledTimes(1));
  });
});
