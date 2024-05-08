import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@orfium/ictinus';
import { getFocus } from '@orfium/ictinus/dist/theme/states/index.js';
import { rem } from 'polished';

const AVATAR_SIZE_COLLAPSED = 36;
const AVATAR_SIZE_EXPANDED = 46;

export const AvatarButton = styled.button`
  background-color: transparent;
  box-shadow: none;
  border-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:focus-visible {
    outline: ${({ theme }) => getFocus({ theme }).styleOutline};
  }

  img {
    width: ${rem(AVATAR_SIZE_COLLAPSED)};
    height: ${rem(AVATAR_SIZE_COLLAPSED)};
    border-radius: 50%;
  }
`;

export const MenuOuterWrapper = styled.div`
  border: ${rem(1)} solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  border-radius: ${rem(8)};
  box-shadow: ${({ theme }) => theme.elevation['04']};
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing.md};
  transition: top 0.25s ease, opacity 0.25s ease, visibility 0.25s ease;
  width: var(--max-width);
  height: var(--max-height);
  overflow: hidden;
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing.sm});
  right: 0;

  &.collapsed {
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    top: calc(100% - ${({ theme }) => theme.spacing.md});
  }
`;

export const MenuInnerWrapper = styled.div`
  min-width: ${rem(310)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  align-items: center;

  > img {
    width: ${rem(AVATAR_SIZE_EXPANDED)};
    height: ${rem(AVATAR_SIZE_EXPANDED)};
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: ${rem(4)};
  }
`;

export const UsernameWrapper = styled.div`
  display: flex;
  gap: ${rem(4)};
  justify-content: flex-start;
  align-items: center;
`;

export const Tag = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes[12]};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  padding: ${({ theme }) => theme.spacing.xsm};
  background-color: ${({ theme }) => theme.utils.getColor('blue', 100)};
  color: ${({ theme }) => theme.utils.getColor('blue', 600)};
  border-radius: ${rem(2)};
  align-self: start;
`;

export const Username = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  font-size: ${({ theme }) => theme.typography.fontSizes['18']};
`;

export const Email = styled.div`
  color: ${({ theme }) => theme.utils.getColor('lightGrey', 650)};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.fontSizes['12']};
`;

const listColumn = css`
  display: flex;
  flex-direction: column;
  gap: ${rem(8)};
`;

export const MenuList = styled.div`
  ${listColumn};
`;

export const PrimarySection = styled.div`
  ${listColumn};
`;

const menuItemStyles = (theme: Theme) => css`
  padding: ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  border-radius: ${rem(4)};
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.15s ease, background-color 0.15s ease;
  user-select: none;
  color: #0e0e17 !important;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background-color: ${theme.utils.getColor('darkBlue', null, 'pale')};
  }

  &:focus-visible {
    outline: ${getFocus({ theme }).styleOutline};
  }
`;

export const MenuItem = styled.a`
  ${({ theme }) => menuItemStyles(theme)};
  text-decoration: none;
`;

export const SecondarySection = styled.div`
  ${listColumn};
  border-top: 1px solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  padding-top: ${({ theme }) => theme.spacing.md}};
`;

export const LogoutButton = styled.button`
  border: none;
  width: 100%;
  ${({ theme }) => menuItemStyles(theme)};
`;
