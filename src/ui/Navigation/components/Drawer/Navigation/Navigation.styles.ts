import styled from '@emotion/styled';
import { transition } from "@orfium/ictinus";
import { rem } from 'polished';

export const NavigationContainer = styled.div<{ hasExtras: boolean }>`
  ${transition(10.2)};
  //width: 100%;
  background-color: white;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: ${({ theme }) => theme.globals.spacing.get("4")};
  overflow: auto;
  padding-bottom: ${({ theme }) => theme.globals.spacing.get("8")};
  max-height: ${({ hasExtras }) => (hasExtras ? `calc(100% - ${rem(184)})` : '')};

  // handle scrolling
  flex-basis: ${({ hasExtras }) => (hasExtras ? '' : 0)};
  flex-grow: ${({ hasExtras }) => (hasExtras ? 0 : 1)};

  //Stick the scrollbar to the edge
  box-sizing: border-box;
  padding-right: ${({ theme }) => `${theme.globals.spacing.get("6")}`};
  width: calc(100% + ${({ theme }) => `${theme.globals.spacing.get("6")}`});

  .menu-item-text,
  .submenu-item-text {
    white-space: nowrap;
  }
`;
