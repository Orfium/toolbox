import styled from '@emotion/styled';
import { rem } from 'polished';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;
export const Button = styled.button`
  position: relative;
  color: ${({ textColor }: { textColor: string }) => textColor};
  border: none;
  font-size: ${({ theme }) => theme.globals.typography.fontSize.get('3')};
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.globals.spacing.get('6')}`};
  transition: background-color 0.15s ease;
  cursor: pointer;
  height: calc(9 * ${({ theme }) => `${theme.globals.spacing.get('4')}`});

  :not([disabled]):hover {
    background-color: ${({ theme }) => `${theme.utils.getColor('lightGrey', 50)}`};
  }

  &[disabled] {
    cursor: default;
  }
`;

export const SelectedOrg = styled.span`
  padding-right: ${({ theme }) => theme.globals.spacing.get('4')};
  display: inline-block;
  text-align: left;
  font-weight: ${({ theme }) => theme.globals.typography.fontWeight.get('medium')};
`;

export const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => `${theme.globals.spacing.get('3')}`};
`;

export const ButtonContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ChevronWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => `${theme.globals.spacing.get('8')}`};
  align-self: start;
`;

export const Tag = styled.span<{ textColor: string }>`
  font-weight: ${({ theme }) => theme.globals.typography.fontWeight.get('medium')};
  font-size: ${({ theme }) => theme.globals.typography.fontSize.get('2')};
  padding: ${({ theme }) => theme.globals.spacing.get('3')};
  background-color: ${({ theme }) => theme.utils.getColor('lightGrey', 100)};
  color: ${({ textColor }) => textColor};
  border-radius: ${rem(2)};
  align-self: start;
`;
