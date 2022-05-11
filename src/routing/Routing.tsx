import React, { ComponentType, FunctionComponent } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RouteComponentProps as ReactRouterRouteComponentProps } from 'react-router';

/**
 * anonymous: general users that can view only public pages - default for all routes without authorization
 * unauthorized: only users that are logged in but not authorized to view those routes
 * authorized: only users that are logged in and also authorized for these routes
 */
export type Authorization = 'anonymous' | 'authorized' | 'unauthorized';

/**
 * unauthenticated: in case a user visits a path and has no authentication
 * unauthorized: when a user visits a path without authorization
 * authenticatedButAnonymous: when a user has authentication but tries to visit an anonymous path
 */
// @TODO remove 'authenticatedButAnonymous' when SSO is implemented because there will be no public anonymous path for any of our products
export type FallbackPath = 'unauthenticated' | 'unauthorized' | 'authenticatedButAnonymous';

export type RoutingStructure = {
  /** Holder of paths relative to the types of authorization. For every type there is a fallback path that a user will be
   * redirected if they don't have access to it based on the authorization **/
  fallbackPaths?: Partial<Record<FallbackPath, string>>;
  routes: RouteItem[];
};

/** This is actual part of the library so you can skip it.
 * An extension of the React Router Component props to be used with the extra props.
 * Is being used to the route component to extend its functionality on types **/
export type RouteComponentProps<T = any> = ReactRouterRouteComponentProps<any> & {
  extraProps: T;
};

const UNAUTHORIZED_URL = '/401';

type RouteItem = {
  /** The url path or paths of the route that will listen to in order to render **/
  path: string | string[];
  /** The authorization level of the route, there are 3: 'anonymous' | 'authorized' | 'unauthorized' - @default: 'anonymous' **/
  authorization?: Authorization;
  /** Any custom/extra props that are going to be available on the component **/
  extraProps?: any;
  /** A component that the route renders as page. This has all the props and extraProps that have been passed to that route **/
  component?: React.FunctionComponent<RouteComponentProps>;
};

type Props = {
  /** An indicator that will be passed in order to identify authenticity of the user. This is different to authorization **/
  isAuthenticated: boolean;
  /** A component to render if a route path is not found within the configuration a.k.a page not found **/
  fallbackComponent?: ComponentType;
  structure: RoutingStructure;
};

/**
 * For each item of the structure it creates a new Route with a Switch statement.
 * It automatically handles the redirections based on authorization of each route to specific pages
 * If the fallbacks are defined then those will be used instead.
 * @param isAuthenticated - defines from the parent if the user is authenticated or not
 * @param structure - the Array of Routes that needs to render with authorization level and extra props.
 * @param fallbackComponent - the component that will render if none of the routes match the url location
 */
export const generateRoutes: FunctionComponent<Props> = ({
  isAuthenticated,
  structure,
  fallbackComponent = <div>Page not found</div>,
}) => {
  return (
    <Switch>
      {structure.routes.map(
        ({ authorization = 'anonymous', component: Component, ...route }, index) => {
          if (!isAuthenticated && authorization !== 'anonymous') {
            return (
              <Route
                key={`${route?.path}_${index}`}
                path={route?.path}
                render={(__props: ReactRouterRouteComponentProps) => (
                  <Redirect
                    key={`${route?.path}_${index}`}
                    to={structure.fallbackPaths?.unauthenticated || UNAUTHORIZED_URL}
                  />
                )}
              />
            );
          }

          if (isAuthenticated && authorization === 'unauthorized') {
            return (
              <Route
                key={`${route?.path}_${index}`}
                path={route?.path}
                render={(__props: ReactRouterRouteComponentProps) => (
                  <Redirect
                    key={`${route?.path}_${index}`}
                    to={structure.fallbackPaths?.unauthorized || UNAUTHORIZED_URL}
                  />
                )}
              />
            );
          }

          // if the user is logged in and tries to go to an anonymous route then redirect him to 'home'
          // e.g authenticated user tries to go to login redirect him to /
          if (isAuthenticated && authorization === 'anonymous') {
            return (
              <Route
                key={`${route?.path}_${index}`}
                path={route?.path}
                render={(__props: ReactRouterRouteComponentProps) => (
                  <Redirect
                    key={`${route?.path}_${index}`}
                    to={structure.fallbackPaths?.authenticatedButAnonymous || '/'}
                  />
                )}
              />
            );
          }

          return (
            <Route
              exact
              key={`${route?.path}_${index}`}
              render={
                typeof Component === 'function'
                  ? (props: ReactRouterRouteComponentProps) => (
                      <Component {...props} extraProps={route?.extraProps} />
                    )
                  : undefined
              }
              {...route}
            />
          );
        }
      )}
      {/* // @TODO consider showing our own pages for each fallback path */}
      {fallbackComponent && <Route children={fallbackComponent} />}
    </Switch>
  );
};
