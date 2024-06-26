import styled from '@emotion/styled';
import { transition } from '@orfium/ictinus';
import { rem } from 'polished';
import { getGlobalNavWidth, menuItemStyle } from '~/ui/Navigation/common.styles';

export const DrawerContainer = styled.div<{
  expanded: boolean;
  isDesktop: boolean;
}>`
  ${transition(0.2, 'width')};
  width: ${({ expanded }) => (expanded ? rem(252) : 0)};
  background-color: ${({ theme }) => theme.globals.oldColors.white};
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
  font-size: ${({ theme }) => `${theme.globals.typography.fontSize.get('5')}`};
  font-weight: ${({ theme }) => `${theme.globals.typography.fontWeight.get('bold')}`};
  line-height: ${({ theme }) => `calc(7 * ${theme.globals.spacing.get('3')}`});
  color: ${({ theme }) => theme.utils.getColor('blue', 600)};
  flex-shrink: 0;
  margin: 0 0 ${({ theme }) => theme.globals.spacing.get('4')} 0;
  white-space: nowrap;
  overflow: hidden;
`;

export const ExtrasContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  padding: ${({ theme }) => `${theme.globals.spacing.get('8')} 0`};
  overflow: auto;

  //Stick the scrollbar to the edge
  box-sizing: border-box;
  padding-right: ${({ theme }) => `${theme.globals.spacing.get('6')}`};
  width: calc(100% + ${({ theme }) => `${theme.globals.spacing.get('6')}`});
`;

export const ExtrasSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.globals.spacing.get('4')};
`;

export const ExtrasSectionTitle = styled.h2`
  font-size: ${({ theme }) => `${theme.globals.typography.fontSize.get('2')}`};
  font-weight: ${({ theme }) => `${theme.globals.typography.fontWeight.get('bold')}`};
  line-height: ${({ theme }) => theme.globals.spacing.get('6')});
  color: ${({ theme }) => theme.utils.getColor('blue', 600)};
  text-transform: uppercase;
  margin: 0;
`;

export const ExtrasSectionMenuItem = styled.a`
  ${({ theme }) => menuItemStyle(theme)};
  font-weight: ${({ theme }) => theme.globals.typography.fontWeight.get('regular')};

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
  padding: ${({ theme }) => `${rem(10)} ${theme.globals.spacing.get('6')} 0`};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  // Necessary for limiting this in case of an overflow and forcing a scollbar to appear
  min-height: 0;
`;
