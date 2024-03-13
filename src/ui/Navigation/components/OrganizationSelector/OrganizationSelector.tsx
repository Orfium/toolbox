import { List, useTheme } from '@orfium/ictinus';
import ClickAwayListener from '@orfium/ictinus/dist/components/utils/ClickAwayListener';
import { MenuPositionAllowed } from '@orfium/ictinus/dist/components/utils/DropdownOptions';
import { ReactNode, useState } from 'react';
import FlippableArrow from '../../../FlippableArrow';
import {
  Button,
  ButtonContentWrapper,
  ButtonTextWrapper,
  ChevronWrapper,
  Option,
  SelectedOrg,
  Tag,
  Wrapper,
} from './OrganizationSelector.styles';

export type Props = {
  /** Items that are being declared as menu options */
  items?: string[];
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: string) => void;
  /** The text of the button to show - defaults to "More" */
  buttonText: ReactNode;
  /** The text of the tag to show - defaults to undefined */
  tagText: ReactNode;
  /** Define if the button is in disabled state */
  disabled?: boolean;
  /** Menu position when open */
  menuPosition?: MenuPositionAllowed;
};

export type TestProps = {
  dataTestId?: string;
};

function OrganizationSelector(props: Props & TestProps) {
  const {
    items,
    disabled,
    onSelect,
    buttonText = 'More',
    menuPosition = 'left',
    dataTestId,
    tagText,
  } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const textColor = theme.utils.getColor('blue', 600);

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <Wrapper data-testid={dataTestId}>
        <Button
          theme={theme}
          disabled={disabled}
          textColor={textColor}
          onClick={() => setOpen((open) => !open)}
        >
          <ButtonContentWrapper>
            <ButtonTextWrapper theme={theme}>
              <SelectedOrg>{buttonText}</SelectedOrg>
              {tagText && (
                <Tag theme={theme} textColor={textColor}>
                  {tagText}
                </Tag>
              )}
            </ButtonTextWrapper>
            {disabled ? null : (
              <ChevronWrapper theme={theme}>
                <FlippableArrow expanded={open} color={textColor} size={11} />
              </ChevronWrapper>
            )}
          </ButtonContentWrapper>
        </Button>

        {open && (
          <Option theme={theme} menuPosition={menuPosition}>
            {items && (
              <List
                data={items}
                rowSize={'small'}
                handleOptionClick={(option: string) => {
                  setOpen(false);
                  onSelect(option);
                }}
              />
            )}
          </Option>
        )}
      </Wrapper>
    </ClickAwayListener>
  );
}

export default OrganizationSelector;
