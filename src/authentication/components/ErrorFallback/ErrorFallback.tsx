import { Button, ExpandCollapse, useTheme } from '@orfium/ictinus';
import React from 'react';

//* using logoutAuth because error fallback is outside of providers */
import { logoutAuth } from '../../context';
import {
  ErrorContainer,
  Wrapper,
  ContentWrapper,
  Box,
  ErrorCover,
  TechInfoTitle,
  TechInfoWrapper,
} from './ErrorFallback.style';

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  const theme = useTheme();

  return (
    <Wrapper role="alert">
      <ErrorCover />
      <ContentWrapper>
        <div style={{ textAlign: 'center' }}>
          <Box>
            <h2>Uh oh, something has gone wrong!</h2>
            <div>
              We track these errors automatically but if the problem persists please{' '}
              <a href={'mailto: platform-support@orfium.com'}>contact us</a>.
            </div>
          </Box>

          <Box>
            <Button onClick={resetErrorBoundary} type={'primary'}>
              Try again
            </Button>
          </Box>

          <div>OR</div>

          <Box>
            <Button onClick={logoutAuth} type={'link'}>
              Logout
            </Button>
          </Box>
        </div>
      </ContentWrapper>
      <TechInfoWrapper>
        <div>
          <TechInfoTitle>Technical Details</TechInfoTitle>

          <ErrorContainer>{error.message}</ErrorContainer>
        </div>
      </TechInfoWrapper>
    </Wrapper>
  );
};

export default ErrorFallback;
