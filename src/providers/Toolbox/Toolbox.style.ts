import styled from '@emotion/styled';
import { rem } from 'polished';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.utils.getColor('lightGrey', 50)};
`;

export const LoadingContent = styled.div`
  color: ${({ theme }) => theme.utils.getColor('primary', 500, 'normal')};
  flex: 1;
  display: flex;
  align-items: center;
  column-gap: ${rem(10)};
  font-size: ${({ theme }) => theme.typography.fontSizes['16']};
`;

export const Box = styled.div`
  margin: ${rem(20)};
`;
