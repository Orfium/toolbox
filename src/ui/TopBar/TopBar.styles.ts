import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { flexCenter } from '@orfium/ictinus/dist/theme/functions';
import { rem } from 'polished';
import { DEFAULT_NAVBAR_HEIGHT } from '~/ui/consts';

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
export const UserDefinedSlot = styled.div`
  ${topAppBarSectionStyles};
  flex-grow: 1;
  justify-content: flex-start;
`;
