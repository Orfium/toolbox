import styled from '@emotion/styled';
import { transition } from '@orfium/ictinus/dist/theme/functions';
import { rem } from 'polished';

export const DrawerContainer = styled.div<{
  expanded: boolean;
  isDesktop: boolean;
}>`
  ${transition(0.2)};
  width: ${({ expanded }) => (expanded ? rem('308px') : 0)};
  background-color: white;
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
`;

export const ExtrasContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  flex-shrink: 0;
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
`;

export const NavElementsContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacing.md}`};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // Necessary for limiting this in case of an overflow and forcing a scollbar to appear
  min-height: 0;
`;
