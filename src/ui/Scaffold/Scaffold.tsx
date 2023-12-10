import { Global } from '@emotion/react';
import { Loader, useTheme } from '@orfium/ictinus';
import { type ReactElement, type ReactNode } from 'react';
import { _useContentLoadingIndicator } from '../../hooks/useContentLoadingIndicator';
import { ContentLoadingIndicator } from '../../providers/ContentLoadingIndicator';
import {
  backGround,
  Contents,
  GridContainer,
  Header,
  LoadingBarWrapper,
  SideNav,
} from './Scaffold.styles';

export type ScaffoldProps = {
  navigationSlot: ReactElement;
  headerSlot: ReactElement;
  children: ReactNode;
};

function ScaffoldInternal(props: ScaffoldProps) {
  const { navigationSlot, headerSlot, children } = props;
  const { loadingIndicatorActive } = _useContentLoadingIndicator();

  const theme = useTheme();

  return (
    <GridContainer>
      <Global styles={{ body: backGround(theme) }} />
      <SideNav>{navigationSlot}</SideNav>
      <Header>
        {loadingIndicatorActive ? (
          <LoadingBarWrapper>
            <Loader type={'indeterminate'} />
          </LoadingBarWrapper>
        ) : null}
        {headerSlot}
      </Header>
      <Contents>{children}</Contents>
    </GridContainer>
  );
}

export function Scaffold(props: ScaffoldProps) {
  const { children, ...rest } = props;

  return (
    <ContentLoadingIndicator>
      <ScaffoldInternal {...rest}>{children}</ScaffoldInternal>
    </ContentLoadingIndicator>
  );
}
