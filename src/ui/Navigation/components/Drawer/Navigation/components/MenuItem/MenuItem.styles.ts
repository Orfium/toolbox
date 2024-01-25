import styled from '@emotion/styled';
import { flexCenter, transition } from '@orfium/ictinus/dist/theme/functions.js';
import { rem } from 'polished';
import { NavLinkWithStatePassthrough } from '../../../../../../../utils/NavLinkWithStatePassthrough/index.js';
import { menuItemStyle } from '../../../../../common.styles.js';

export const MenuItemButton = styled.button`
  ${({ theme }) => menuItemStyle(theme)};
  width: 100%;
`;

export const MenuLink = styled(NavLinkWithStatePassthrough)`
  ${({ theme }) => menuItemStyle(theme)};

  text-decoration: none;

  &:active {
    > span {
      transform: scale(0.95);
    }
  }
`;

export const ArrowContainer = styled.div<{ open: boolean }>`
  ${transition(0.2)};
  ${flexCenter};
  width: ${rem(24)};
  height: ${rem(24)};
  margin-left: auto;
  position: relative;

  path {
    background-color: ${({ theme }) => theme.utils.getColor('lightGrey', 750)};
  }
`;

export const ExpandCollapseWrapper = styled.div<{ matched: boolean }>`
  transition: background-color 0.15s ease;
  background-color: ${({ theme, matched }) =>
    matched ? theme.utils.getColor('darkBlue', null, 'pale') : 'transparent'};
  border-radius: ${rem(4)};

  > div > button + div {
    overflow: hidden;
  }
`;

export const Bullet = styled.span<{ color: string }>`
  border-radius: 100%;
  width: ${rem(7)};
  height: ${rem(7)};
  background-color: ${({ color }) => color};
  transition: background-color 0.15s ease;
`;
