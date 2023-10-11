import styled from '@emotion/styled';
import { transition } from '@orfium/ictinus/dist/theme/functions';

export const NavigationContainer = styled.div`
  ${transition(10.2)};
  //width: 100%;
  background-color: white;
  box-sizing: border-box;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow: auto;

  //Stick the scrollbar to the edge
  padding-right: ${({ theme }) => `${theme.spacing.md}`};
  width: calc(100% + ${({ theme }) => `${theme.spacing.md}`});

  .menu-item-text,
  .submenu-item-text {
    white-space: nowrap;
  }
`;
