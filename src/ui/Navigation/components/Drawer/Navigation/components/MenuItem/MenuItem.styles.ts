import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@orfium/ictinus';
import { flexCenter, flexCenterVertical, transition } from '@orfium/ictinus/dist/theme/functions';
import { getFocus } from '@orfium/ictinus/dist/theme/states';
import { rem } from 'polished';
import { NavLink, NavLinkProps } from 'react-router-dom';

const itemStyle = (theme: Theme): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${rem(44)};
  color: ${theme.utils.getColor('darkGrey', 850)};
  cursor: default;
`;

const menuItemStyle = (theme: Theme) => css`
  ${itemStyle(theme)};
  font-size: ${theme.typography.fontSizes['14']};
  font-weight: ${theme.typography.weights.medium};
  padding: 0 ${theme.spacing.sm};
  border: 0 solid transparent;
  display: flex;
  justify-content: flex-start;
  text-decoration: none;
  border-radius: ${rem(4)};
  transition: background-color 0.15s ease;
  cursor: pointer;
  background-color: transparent;
  flex-shrink: 0;
  color: ${theme.utils.getColor('lightGrey', 650)};

  &.active {
    background-color: ${theme.utils.getColor('lightGrey', 100)};
    color: ${theme.utils.getColor('blue', 600)};
  }

  &:hover {
    background-color: ${theme.utils.getColor('lightGrey', 100)};
  }

  &:focus-visible {
    outline: ${getFocus({ theme }).styleOutline};
  }
`;

export const MenuItemButton = styled.button`
  ${({ theme }) => menuItemStyle(theme)};
  width: 100%;
`;

export const MenuItemText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  transform: scale(1);
  transition: transform 0.15s ease;
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MenuLink = styled<NavLinkProps & { isSubMenu: boolean }>(NavLink)`
  ${
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ({ theme, isSubMenu }) => menuItemStyle(theme, isSubMenu)
  };
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

export const MenuIcon = styled.div<{ hidden: boolean }>`
  position: relative;
  ${transition(0.2)};
  ${flexCenter};
  margin-right: ${({ theme }) => theme.spacing.sm};
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  flex-shrink: 0;
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  transform: ${({ hidden }) => (hidden ? `scale(0.6)` : `scale(1)`)};
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
