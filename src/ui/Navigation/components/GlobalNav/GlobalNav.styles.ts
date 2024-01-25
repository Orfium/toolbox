import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@orfium/ictinus';
import { rem } from 'polished';
import { LinkProps, NavLink } from 'react-router-dom';
import { DEFAULT_NAVBAR_HEIGHT } from '../../../consts.js';
import { getGlobalNavWidth } from '../../common.styles.js';

export const Wrapper = styled.div`
  width: ${({ theme }) => getGlobalNavWidth(theme)};
  display: flex;
  flex-basis: calc(7 * ${({ theme }) => `${theme.spacing.sm}`}); // 56px
  flex-direction: column;
  flex-shrink: 0;
  background-color: #151447;
`;

export const BurgerButton = styled.button`
  ${({ theme }) => AppIcon(theme)};
  border: none;
  background-color: transparent;
`;

export const SingleIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${rem(DEFAULT_NAVBAR_HEIGHT)};
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  gap: ${({ theme }) => `${theme.spacing.md} 0`};
`;

export const AppIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AppIcon = (theme: Theme) => css`
  background-color: #ffffff10;
  border-radius: 4px;
  height: ${theme.spacing.xl};
  width: ${theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease, box-shadow 0.1s ease, outline 0.1s ease;
  box-shadow: 0 0 0 0 #fff;
  cursor: pointer;

  > img,
  > span > svg {
    transition: transform 0.15s ease;
    transform: scale(1);
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px #fff;
    background-color: #ffffff20;
    outline: 1px solid #fff;
  }

  &:hover {
    background-color: #ffffff20;
  }

  &.active {
    box-shadow: 0 0 0 1px #fff;
    background-color: ${theme.utils.getColor('blue', 500)};
    outline: 1px solid #fff;
  }

  &:active {
    > img,
    > span > svg {
      transform: scale(0.9);
    }
  }
`;

export const AppIconNativeLink = styled.a`
  ${({ theme }) => AppIcon(theme)}
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const AppIconRRLink = styled<LinkProps>(NavLink)`
  ${({ theme }) => AppIcon(theme)};
`;

export const AppIconButton = styled.button`
  ${({ theme }) => AppIcon(theme)};
`;
