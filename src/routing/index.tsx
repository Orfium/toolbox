import { Redirect, Route, Router, Switch, useHistory } from 'react-router-dom';
import React from 'react';
import { RouteProps } from 'react-router-dom';

/**
 * anonymous: general users that can view only public pages
 * unauthorized: only users that are logged in but not authorized to view those routes
 * authorized: only users that are logged in and also authorized for these routes
 */
type Authorization = 'anonymous' | 'authorized' | 'unauthorized';

type Config = {
  fallbackPaths?: Partial<Record<Authorization, string>>;
  routes: RouteItem[];
};

type RouteItem = {
  // defaults: 'anonymous'
  authorization?: Authorization;
} & RouteProps;

type Props = {
  isAuthenticated: boolean;
  // page not found Component
  fallbackComponent: React.ComponentType;
  structure: Config;
};

function TestAppNavigation({ auth }: any) {
  const history = useHistory();
  const structure: Config = {
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
        component: () => <div>unauthorized</div>,
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
    <Router history={history}>
      {generateRoutes({
        isAuthenticated: auth.isAuthenticated,
        structure,
        fallbackComponent: () => <div>page not found</div>,
      })}
    </Router>
  );
}

const generateRoutes: React.FunctionComponent<Props> = ({
  isAuthenticated,
  structure,
  fallbackComponent,
}) => {
  return (
    <Switch>
      {structure.routes.map(({ authorization = 'anonymous', ...route }, index) => {
        const renderCondition = authorization === 'authorized' ? isAuthenticated : !isAuthenticated;

        if (authorization === 'anonymous') {
          return <Route exact key={`${route?.path}_${index}`} {...route} />;
        }

        return renderCondition ? (
          <Route exact key={`${route?.path}_${index}`} {...route} />
        ) : (
          <Redirect to={structure.fallbackPaths?.[authorization] || '/403'} />
        );
      })}
      {fallbackComponent && <Route children={fallbackComponent} />}
    </Switch>
  );
};
