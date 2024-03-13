import { type ReactElement, type ReactNode } from 'react';
import { Contents, GridContainer, Header, SideNav } from './Scaffold.styles';

export type ScaffoldProps = {
  navigationSlot: ReactElement;
  headerSlot: ReactElement;
  children: ReactNode;
};

export function Scaffold(props: ScaffoldProps) {
  const { navigationSlot, headerSlot, children } = props;

  return (
    <GridContainer>
      <SideNav>{navigationSlot}</SideNav>
      <Header>{headerSlot}</Header>
      <Contents>{children}</Contents>
    </GridContainer>
  );
}
