import styled from '@emotion/styled';
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
    // @TODO fix this
    outline: #c813d5 auto 0.0625rem;
  }

  img {
    width: ${rem(AVATAR_SIZE_COLLAPSED)};
    height: ${rem(AVATAR_SIZE_COLLAPSED)};
    border-radius: 50%;
  }
`;

export const Header = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.globals.spacing.get('4')};
  padding: ${({ theme }) => theme.globals.spacing.get('6')}
    ${({ theme }) => theme.globals.spacing.get('4')};
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
