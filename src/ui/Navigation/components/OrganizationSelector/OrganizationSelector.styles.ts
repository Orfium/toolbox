import styled from '@emotion/styled';
import {
  MenuPositionAllowed,
  optionsStyle,
} from '@orfium/ictinus/dist/components/utils/DropdownOptions';
import { rem } from '@orfium/ictinus/dist/theme/utils';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;
export const Button = styled.button`
  position: relative;
  color: ${({ textColor }: { textColor: string }) => textColor};
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSizes['14']};
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.spacing.md}`};
  transition: background-color 0.15s ease;
  cursor: pointer;
  height: calc(9 * ${({ theme }) => `${theme.spacing.sm}`});

  :not([disabled]):hover {
    background-color: ${({ theme }) => `${theme.utils.getColor('lightGrey', 50)}`};
  }

  &[disabled] {
    cursor: default;
  }
`;

export const SelectedOrg = styled.span`
  padding-right: ${({ theme }) => theme.spacing.sm};
  display: inline-block;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

export const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => `${theme.spacing.xsm}`};
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
  width: ${({ theme }) => `${theme.spacing.lg}`};
  align-self: start;
`;

export const Tag = styled.span<{ textColor: string }>`
  font-size: ${({ theme }) => theme.typography.fontSizes[12]};
  padding: ${({ theme }) => theme.spacing.xsm};
  background-color: ${({ theme }) => theme.utils.getColor('lightGrey', 100)};
  color: ${({ textColor }) => textColor};
  border-radius: ${rem(2)};
  align-self: start;
`;
export const Option = styled.span<{ menuPosition: MenuPositionAllowed }>`
  ${({ theme, menuPosition }) => optionsStyle({ menuPosition })(theme)}
`;
