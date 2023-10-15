import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@orfium/ictinus';
import { flexCenter } from '@orfium/ictinus/dist/theme/functions';
import { rem } from 'polished';
import { DEFAULT_NAVBAR_HEIGHT } from '../consts';

export const backGround = (theme: Theme) => css`
  background-color: ${theme.utils.getColor('blue', null, 'pale')};
`;
export const TopAppBarWrapper = styled.div`
  ${flexCenter};
  background-color: transparent;
  position: relative;
  justify-content: space-between;
  height: ${rem(DEFAULT_NAVBAR_HEIGHT)};
  padding: 0;
`;

const topAppBarSectionStyles = css`
  position: relative;
  ${flexCenter};
  flex-wrap: nowrap;
`;

export const UserSection = styled.div`
  ${topAppBarSectionStyles};
  flex-shrink: 0;
`;
export const UserDefinedSection = styled.div`
  ${topAppBarSectionStyles};
  flex-grow: 1;
  justify-content: flex-start;
`;
