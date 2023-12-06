import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@orfium/ictinus';

export const backGround = (theme: Theme) => css`
  background-color: ${theme.utils.getColor('blue', null, 'pale')};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 0fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main'
    'sidebar main';
  height: 100vh;
`;

export const Header = styled.header`
  grid-area: header;
  z-index: 100;
  position: sticky;
  top: 0;
  padding: 0 ${({ theme }) => theme.spacing.md};
  ${({ theme }) => backGround(theme)};
`;

export const Contents = styled.main`
  grid-area: main;
  position: relative;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.lg};
  overflow: auto;
`;

export const SideNav = styled.aside`
  grid-area: sidebar;
  transition: all 0.2s ease-in-out;
  position: relative;
  z-index: 101;
`;
