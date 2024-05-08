import styled from '@emotion/styled';
import { transition } from '@orfium/ictinus/dist/theme/functions.js';
import { rem } from 'polished';

export const NavigationContainer = styled.div<{ hasExtras: boolean }>`
  ${transition(10.2)};
  //width: 100%;
  background-color: white;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow: auto;
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  max-height: ${({ hasExtras }) => (hasExtras ? `calc(100% - ${rem(184)})` : '')};

  // handle scrolling
  flex-basis: ${({ hasExtras }) => (hasExtras ? '' : 0)};
  flex-grow: ${({ hasExtras }) => (hasExtras ? 0 : 1)};

  //Stick the scrollbar to the edge
  box-sizing: border-box;
  padding-right: ${({ theme }) => `${theme.spacing.md}`};
  width: calc(100% + ${({ theme }) => `${theme.spacing.md}`});

  .menu-item-text,
  .submenu-item-text {
    white-space: nowrap;
  }
`;
