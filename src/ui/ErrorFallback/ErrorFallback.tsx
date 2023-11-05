import { Button } from '@orfium/ictinus';
import ErrorCoverImg from '../../assets/error_cover.svg';
//* using logoutAuth because error fallback is outside of providers */
import { logoutAuth } from '../../utils/auth';
import {
  Box,
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
      <ErrorCover src={ErrorCoverImg} alt="error fallback cover" />
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
