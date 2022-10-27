import Authentication from './Authentication';
import { TopBarProps } from './components/TopBar/TopBar';
import { useAuthentication, AuthenticationProvider } from './context';
// note: TopBar is part of the Authentication as Authentication.TopBar so there is no need to import/export here

export { TopBarProps, Authentication, useAuthentication, AuthenticationProvider };
export * from './types';
