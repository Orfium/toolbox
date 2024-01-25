import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@orfium/ictinus';
import { flexCenter, transition } from '@orfium/ictinus/dist/theme/functions.js';
import { getFocus } from '@orfium/ictinus/dist/theme/states';
import { rem } from 'polished';

export function getGlobalNavWidth(theme: Theme) {
  return `calc(7 * ${theme.spacing.sm})`; // 56px
}

export const menuItemStyle = (theme: Theme) => css`
  height: ${rem(44)};
  color: ${theme.utils.getColor('darkGrey', 850)};
  font-size: ${theme.typography.fontSizes['14']};
  font-weight: ${theme.typography.weights.medium};
  padding: 0 ${theme.spacing.sm};
  border: 0 solid transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  border-radius: ${rem(4)};
  transition: background-color 0.15s ease;
  cursor: pointer;
  background-color: transparent;
  flex-shrink: 0;
  color: ${theme.utils.getColor('lightGrey', 650)};
  user-select: none;
  overflow: hidden;

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

export const MenuIcon = styled.div<{ hidden?: boolean }>`
  position: relative;
  ${transition(0.2)};
  ${flexCenter};
  margin-right: ${({ theme }) => theme.spacing.sm};
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  flex-shrink: 0;
  opacity: ${({ hidden = false }) => (hidden ? 0 : 1)};
  visibility: ${({ hidden = false }) => (hidden ? 'hidden' : 'visible')};
  transform: ${({ hidden = false }) => (hidden ? `scale(0.6)` : `scale(1)`)};
`;

export const MenuItemText = styled.span<{ color?: string }>`
  color: ${({ theme, color = theme.utils.getColor('lightGrey', 650) }) => color};
  transform: scale(1);
  transition: transform 0.15s ease;
`;
