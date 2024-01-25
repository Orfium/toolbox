import styled from '@emotion/styled';
import { rem } from 'polished';

export const ErrorCover = styled.img`
  margin: ${rem(30)};
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.utils.getColor('lightGrey', 50)};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Box = styled.div`
  margin: ${rem(20)};
`;

export const ErrorContainer = styled.div`
  display: inline-block;
  padding: ${rem(10)};
  background-color: ${({ theme }) => theme.utils.getColor('yellow', 150)};
  color: ${({ theme }) => theme.utils.getAAColor(theme.utils.getColor('yellow', 150))};
  margin-bottom: ${rem(15)};
`;

export const TechInfoWrapper = styled.div`
  margin-top: ${rem(40)};
  background: ${({ theme }) => theme.utils.getColor('neutralWhite', 500)};
  width: 100%;
  text-align: center;
`;

export const TechInfoTitle = styled.div`
  padding: ${rem(10)};
  color: ${({ theme }) => theme.utils.getColor('lightGrey', 650)};
`;
