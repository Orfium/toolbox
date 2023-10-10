import styled from '@emotion/styled';
import {
  MenuPositionAllowed,
  optionsStyle,
} from '@orfium/ictinus/dist/components/utils/DropdownOptions';
import { rem } from '@orfium/ictinus/dist/theme/utils';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;
export const Button = styled.button`
  position: relative;
  color: ${({ textColor }: { textColor: string }) => textColor};
  border: none;
  display: flex;
  font-size: ${({ theme }) => theme.typography.fontSizes['14']};
  align-items: center;
  padding: 0;

  > span {
    padding-right: ${({ theme }) => theme.spacing.sm};
    display: inline-block;
  }
`;

export const Tag = styled.span<{ backgroundColor: string; textColor: string }>`
  font-size: ${({ theme }) => theme.typography.fontSizes[12]};
  padding: ${({ theme }) => theme.spacing.xsm};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border-radius: ${rem(2)};
`;
export const Option = styled.span<{ menuPosition: MenuPositionAllowed }>`
  ${({ theme, menuPosition }) => optionsStyle({ menuPosition })(theme)}
`;
