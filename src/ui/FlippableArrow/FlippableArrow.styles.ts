import styled from '@emotion/styled';
import { transition } from '@orfium/ictinus/dist/theme/functions.js';

export const IconWrapper = styled.span<{ expanded: boolean }>`
  perspective: 1000px;
  position: relative;

  > span {
    ${transition(0.2)};
    transform-style: preserve-3d;
    transform: ${({ expanded }) => (expanded ? `rotateX(180deg) ` : `rotateX(0)`)};
  }
`;
