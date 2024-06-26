import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@orfium/ictinus';
import { rem } from 'polished';

const AVATAR_SIZE_COLLAPSED = 36;
const AVATAR_SIZE_EXPANDED = 46;

export const Anchor = styled.div`
  position: relative;
  height: ${rem(AVATAR_SIZE_COLLAPSED)};
`;

export const MenuOuterWrapper = styled.div`
  --max-width: auto;
  --max-height: auto;
  --min-width: ${rem(AVATAR_SIZE_COLLAPSED)};
  --min-height: ${rem(AVATAR_SIZE_COLLAPSED)};
  border: ${rem(1)} solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  border-radius: ${rem(8)};
  box-shadow: ${({ theme }) => theme.globals.elevation['04']};
  background-color: #fff;
  padding: ${({ theme }) => theme.globals.spacing.get('6')};
  transition: padding 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease,
    border-color 0.25s ease, width 0.25s ease, height 0.25s ease;
  width: var(--max-width);
  height: var(--max-height);
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;

  [data-menu-header] {
    transition: padding 0.25s ease;
  }

  [data-menu-header] > div,
  [data-menu-options] {
    transition: opacity 0.15s ease;
    opacity: 1;
    visibility: visible;
  }

  &.collapsed {
    width: var(--min-width);
    height: var(--min-height);
    padding: 1px; // fixes weird 1px clipping issue between this and the img
    background-color: transparent;
    box-shadow: none;
    border-color: transparent;
    cursor: pointer;

    &:focus-visible {
      // @TODO fix this
      outline: #c813d5 auto 0.0625rem;
    }

    [data-menu-header] {
      padding: 0;
    }

    [data-menu-header] > div,
    [data-menu-options] {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const MenuInnerWrapper = styled.div`
  min-width: ${rem(310)};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.globals.spacing.get('6')};
`;

export const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.globals.spacing.get('4')};
  padding: 0 ${({ theme }) => theme.globals.spacing.get('4')};
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

  &.collapsed {
    img {
      width: ${rem(AVATAR_SIZE_COLLAPSED)};
      height: ${rem(AVATAR_SIZE_COLLAPSED)};
    }
  }
`;

export const UsernameWrapper = styled.div`
  display: flex;
  gap: ${rem(4)};
  justify-content: flex-start;
  align-items: center;
`;

export const Tag = styled.span`
  font-size: ${({ theme }) => theme.globals.typography.fontSize.get('2')};
  font-weight: ${({ theme }) => theme.globals.typography.fontWeight.get('medium')};
  padding: ${({ theme }) => theme.globals.spacing.get('3')};
  background-color: ${({ theme }) => theme.utils.getColor('blue', 100)};
  color: ${({ theme }) => theme.utils.getColor('blue', 600)};
  border-radius: ${rem(2)};
  align-self: start;
`;

export const Username = styled.div`
  font-weight: ${({ theme }) => theme.globals.typography.fontWeight.get('bold')};
  font-size: ${({ theme }) => theme.globals.typography.fontSize.get('5')};
`;

export const Email = styled.div`
  color: ${({ theme }) => theme.utils.getColor('lightGrey', 650)};
  font-weight: ${({ theme }) => theme.globals.typography.fontWeight.get('medium')};
  font-size: ${({ theme }) => theme.globals.typography.fontSize.get('2')};
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
  padding: ${theme.globals.spacing.get('6')};
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
    // @TODO fix this
    outline: #c813d5 auto 0.0625rem;
  }
`;

export const MenuItem = styled.a`
  ${({ theme }) => menuItemStyles(theme)};
  text-decoration: none;
`;

export const SecondarySection = styled.div`
  ${listColumn};
  border-top: 1px solid ${({ theme }) => theme.utils.getColor('lightGrey', 200)};
  padding-top: ${({ theme }) => theme.globals.spacing.get('6')};
`;

export const LogoutButton = styled.button`
  border: none;
  width: 100%;
  ${({ theme }) => menuItemStyles(theme)};
`;
