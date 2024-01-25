import styled from '@emotion/styled';
import { transition } from '@orfium/ictinus/dist/theme/functions.js';
import { rem } from 'polished';
import { getGlobalNavWidth, menuItemStyle } from '../../common.styles.js';

export const DrawerContainer = styled.div<{
  expanded: boolean;
  isDesktop: boolean;
}>`
  ${transition(0.2, 'width')};
  width: ${({ expanded }) => (expanded ? rem(252) : 0)};
  background-color: ${({ theme }) => theme.palette.white};
  position: ${({ isDesktop }) => (isDesktop ? 'relative' : 'absolute')};
  left: ${({ theme, isDesktop }) => (isDesktop ? 0 : getGlobalNavWidth(theme))};
  flex-shrink: 0;
  height: 100%;
  min-height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-right: ${rem(1)} solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  overflow: hidden;
`;

export const OrgSwitcherWrapper = styled.div`
  z-index: 101;
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > div {
    width: 100%;
  }
`;

export const NavHeader = styled.h2`
  font-size: ${({ theme }) => `${theme.typography.fontSizes['18']}`};
  font-weight: ${({ theme }) => `${theme.typography.weights.bold}`};
  line-height: ${({ theme }) => `calc(7 * ${theme.spacing.xsm}`});
  color: ${({ theme }) => theme.utils.getColor('blue', 600)};
  flex-shrink: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  white-space: nowrap;
  overflow: hidden;
`;

export const ExtrasContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};
  overflow: auto;

  //Stick the scrollbar to the edge
  box-sizing: border-box;
  padding-right: ${({ theme }) => `${theme.spacing.md}`};
  width: calc(100% + ${({ theme }) => `${theme.spacing.md}`});
`;

export const ExtrasSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ExtrasSectionTitle = styled.h2`
  font-size: ${({ theme }) => `${theme.typography.fontSizes['12']}`};
  font-weight: ${({ theme }) => `${theme.typography.weights.bold}`};
  line-height: ${({ theme }) => theme.spacing.md});
  color: ${({ theme }) => theme.utils.getColor('blue', 600)};
  text-transform: uppercase;
  margin: 0;
`;

export const ExtrasSectionMenuItem = styled.a`
  ${({ theme }) => menuItemStyle(theme)};
  font-weight: ${({ theme }) => theme.typography.weights.regular};

  > span {
    transform: scale(1);
    transition: transform 0.15s ease;
  }

  &:active {
    > span {
      transform: scale(0.95);
    }
  }
`;

export const NavElementsContainer = styled.div`
  padding: ${({ theme }) => `${rem(10)} ${theme.spacing.md} 0`};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // Necessary for limiting this in case of an overflow and forcing a scollbar to appear
  min-height: 0;
`;
