import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import type { ComponentType, FunctionComponent } from 'react';
import React from 'react';
import { RouteComponentProps as ReactRouterRouteComponentProps } from 'react-router';

export * from 'react-router-dom';

/**
 * anonymous: general users that can view only public pages
 * unauthorized: only users that are logged in but not authorized to view those routes
 * authorized: only users that are logged in and also authorized for these routes
 */
export type Authorization = 'anonymous' | 'authorized' | 'unauthorized';

export type RoutingStructure = {
  fallbackPaths?: Partial<Record<Authorization, string>>;
  routes: RouteItem[];
};

export type RouteComponentProps<T = any> = ReactRouterRouteComponentProps<any> & {
  extraProps: T;
};

type RouteItem = {
  path: string | string[];
  // defaults: 'anonymous'
  authorization?: Authorization;
  extraProps?: any;
  component?: React.FunctionComponent<RouteComponentProps>;
};

type Props = {
  isAuthenticated: boolean;
  // page not found Component
  fallbackComponent?: ComponentType;
  structure: RoutingStructure;
};

export enum Pages {
  SignIn,
  SignUp,
  CheckEmail,
  ForgotPasswordSubmitPassword,
  ForgotPasswordSubmitEmail,
  Loading,
}

function TestAppNavigation({ auth }: any) {
  const structure: RoutingStructure = {
    fallbackPaths: {
      unauthorized: '/accountVerification',
      authorized: '/not-logged-in',
      anonymous: '/403',
    },
    routes: [
      { authorization: 'authorized', path: '/authorized', component: () => <div>authorized</div> },
      {
        authorization: 'unauthorized',
        path: '/unauthorized',
        extraProps: Pages.SignUp,
        component: () => <div>authorized</div>,
      },
      {
        authorization: 'anonymous',
        path: '/orfium-one-page',
        component: () => <div>anonymous</div>,
      },
      {
        authorization: 'unauthorized',
        path: '/login',
        component: () => <div>unauthorized</div>,
      },
    ],
  };

  return (
    <BrowserRouter>
      {generateRoutes({
        isAuthenticated: auth.isAuthenticated,
        structure,
        fallbackComponent: () => <div>page not found</div>,
      })}
    </BrowserRouter>
  );
}

export const generateRoutes: FunctionComponent<Props> = ({
  isAuthenticated,
  structure,
  fallbackComponent = <div>Page not found</div>,
}) => {
  return (
    <Switch>
      {structure.routes.map(
        ({ authorization = 'anonymous', component: Component, ...route }, index) => {
          const renderCondition = isAuthenticated
            ? authorization === 'authorized'
            : isAuthenticated;

          console.log({ v: '1.1', ...route, authorization });
          // if the user is logged in and tries to go to an anonymous route then redirect him to 'home'
          // e.g authenticated user tries to go to login redirect him to /
          // if (isAuthenticated && authorization === 'anonymous') {
          //   return (
          //     <Route
          //       key={`${route?.path}_${index}`}
          //       render={() => <Redirect key={`${route?.path}_${index}`} to={'/'} />}
          //     />
          //   );
          // }

          if (authorization === 'anonymous') {
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

          return renderCondition ? (
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
          ) : (
            <Route
              key={`${route?.path}_${index}`}
              render={(props: ReactRouterRouteComponentProps) => (
                <Redirect
                  key={`${route?.path}_${index}`}
                  to={structure.fallbackPaths?.[authorization] || '/403'}
                />
              )}
            />
          );
        }
      )}
      {/*
      // @ts-ignore */}
      {fallbackComponent && <Route children={fallbackComponent} />}
    </Switch>
  );
};
