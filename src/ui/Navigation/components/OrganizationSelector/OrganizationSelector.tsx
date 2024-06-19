import { ListItem, ListItemText, Menu, useTheme } from '@orfium/ictinus';
import { ReactNode, useRef, useState } from 'react';
import FlippableArrow from '~/ui/FlippableArrow';
import {
  Button,
  ButtonContentWrapper,
  ButtonTextWrapper,
  ChevronWrapper,
  SelectedOrg,
  Tag,
  Wrapper,
} from './OrganizationSelector.styles';

export type MenuPositionAllowed = 'left' | 'right';
export type Props = {
  /** Items that are being declared as menu options */
  items?: string[];
  /** A callback that is being triggered when an items has been clicked */
  onSelect: (option: string) => void;
  /** The text of the button to show - defaults to "More" */
  buttonText: ReactNode;
  /** The text of the tag to show - defaults to undefined */
  tagText?: ReactNode;
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
    dataTestId,
    tagText = 'Organization',
  } = props;
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const handleBtnClick = (e: any) => {
    e?.preventDefault && e?.preventDefault();
    setOpen((state) => !state);
  };
  const theme = useTheme();
  const outerMenuWrapperRef = useRef<HTMLDivElement | null>(null);
  const textColor = theme.utils.getColor('blue', 600);

  return (
    <Wrapper ref={outerMenuWrapperRef} data-testid={dataTestId}>
      <Button
        ref={btnRef}
        theme={theme}
        disabled={disabled}
        textColor={textColor}
        onClick={handleBtnClick}
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
              <FlippableArrow color={'#000'} expanded={open} size={18} />
            </ChevronWrapper>
          )}
        </ButtonContentWrapper>
      </Button>
      <Menu
        triggerRef={btnRef}
        isOpen={open}
        onClose={handleBtnClick}
        onAction={(option: string) => {
          onSelect(option);
        }}
      >
        {items?.map((item) => (
          <ListItem key={item} textValue={item} parentType={'Menu'}>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))}
      </Menu>
      {/*{open && (*/}
      {/*  <Option theme={theme} menuPosition={menuPosition}>*/}
      {/*    {items && (*/}
      {/*      <List*/}
      {/*        handleOptionClick={(option: string) => {*/}
      {/*          setOpen(false);*/}
      {/*          onSelect(option);*/}
      {/*        }}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  </Option>*/}
      {/*)}*/}
    </Wrapper>
  );
}

export default OrganizationSelector;
