import { Box, Button } from '@orfium/ictinus';
//* using logoutAuth because error fallback is outside of providers */
import { logoutAuth } from '~/utils/auth';
import {
  ContentWrapper,
  ErrorContainer,
  ErrorCover,
  TechInfoTitle,
  TechInfoWrapper,
  Wrapper,
} from './ErrorFallback.styles';

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
  return (
    <Wrapper role="alert">
      <ErrorCover title="Error fallback cover" />
      <ContentWrapper>
        <div style={{ textAlign: 'center' }}>
          <Box>
            <h2>Uh oh, something has gone wrong!</h2>
            <div>
              We track these errors automatically but if the problem persists please{' '}
              <a href={'mailto: platform-support@orfium.com'}>contact us</a>.
            </div>
          </Box>

          <Box justifyContent={'center'} display={'flex'} m={'7'}>
            <Button onClick={resetErrorBoundary} type={'primary'}>
              Try again
            </Button>
          </Box>

          <div>OR</div>

          <Box justifyContent={'center'} display={'flex'} m={'7'}>
            <Button onClick={() => logoutAuth()} type={'tertiary'}>
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
