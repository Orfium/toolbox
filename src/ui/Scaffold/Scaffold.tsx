import { Global } from '@emotion/react';
import { useTheme } from '@orfium/ictinus';
import { type ReactElement, type ReactNode } from 'react';
import { backGround, Contents, GridContainer, Header, SideNav } from './Scaffold.styles';

export type ScaffoldProps = {
  navigationSlot: ReactElement;
  headerSlot: ReactElement;
  children: ReactNode;
};

export function Scaffold(props: ScaffoldProps) {
  const { navigationSlot, headerSlot, children } = props;

  const theme = useTheme();

  return (
    <GridContainer>
      <Global styles={{ body: backGround(theme) }} />
      <SideNav>{navigationSlot}</SideNav>
      <Header>{headerSlot}</Header>
      <Contents>{children}</Contents>
    </GridContainer>
  );
}
