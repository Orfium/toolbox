import { Icon, List, useTheme } from '@orfium/ictinus';
import * as React from 'react';

import ClickAwayListener from '@orfium/ictinus/dist/components/utils/ClickAwayListener';
import { MenuPositionAllowed } from '@orfium/ictinus/dist/components/utils/DropdownOptions';
import { Button, Option, Tag, Wrapper } from './Menu.style';

export type Props = {
  /** Items that are being declared as menu options */
  items?: string[];
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: string) => void;
  /** The text of the button to show - defaults to "More" */
  buttonText: React.ReactNode;
  /** The text of the tag to show - defaults to undefined */
  tagText: React.ReactNode;
  /** Define if the button is in disabled state */
  disabled?: boolean;
  /** Menu position when open */
  menuPosition?: MenuPositionAllowed;
};

export type TestProps = {
  dataTestId?: string;
};

const Menu: React.FC<Props & TestProps> = (props) => {
  const {
    items,
    disabled,
    onSelect,
    buttonText = 'More',
    menuPosition = 'left',
    dataTestId,
    tagText,
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const textColor = theme.utils.getColor('blue', 600);
  const backgroundColor = theme.utils.getColor('lightGrey', 100);

  return (
    <ClickAwayListener onClick={() => setOpen(false)}>
      <Wrapper data-testid={dataTestId}>
        <Button disabled={disabled} textColor={textColor} onClick={() => setOpen((open) => !open)}>
          <span>{buttonText}</span>{' '}
          <Icon name={open ? 'triangleUp' : 'triangleDown'} size={11} color={textColor} />
        </Button>
        {tagText && (
          <Tag backgroundColor={backgroundColor} textColor={textColor}>
            {tagText}
          </Tag>
        )}
        {open && (
          <Option menuPosition={menuPosition}>
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
};

export default Menu;
