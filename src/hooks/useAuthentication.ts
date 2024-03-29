import { useContext } from 'react';
import { AuthenticationContext } from '~/contexts/authentication';

export const useAuthentication = () => useContext(AuthenticationContext);

export type UseAuthenticationReturnValue = ReturnType<typeof useAuthentication>;
