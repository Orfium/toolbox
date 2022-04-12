import type { RouteProps } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import type { ComponentType, FunctionComponent } from 'react';

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

type RouteItem = {
  // defaults: 'anonymous'
  authorization?: Authorization;
} & RouteProps;

type Props = {
  isAuthenticated: boolean;
  // page not found Component
  fallbackComponent?: ComponentType;
  structure: RoutingStructure;
};

// function TestAppNavigation({ auth }: any) {
//   const structure: RoutingStructure = {
//     fallbackPaths: {
//       unauthorized: '/accountVerification',
//       authorized: '/not-logged-in',
//       anonymous: '/403',
//     },
//     routes: [
//       { authorization: 'authorized', path: '/authorized', component: () => <div>authorized</div> },
//       {
//         authorization: 'unauthorized',
//         path: '/unauthorized',
//         component: () => <div>unauthorized</div>,
//       },
//       {
//         authorization: 'anonymous',
//         path: '/orfium-one-page',
//         component: () => <div>anonymous</div>,
//       },
//       {
//         authorization: 'unauthorized',
//         path: '/login',
//         component: () => <div>unauthorized</div>,
//       },
//     ],
//   };
//
//   return (
//     <Router>
//       {generateRoutes({
//         isAuthenticated: auth.isAuthenticated,
//         structure,
//         fallbackComponent: () => <div>page not found</div>,
//       })}
//     </Router>
//   );
// }

export const generateRoutes: FunctionComponent<Props> = ({
  isAuthenticated,
  structure,
  fallbackComponent = <div>Page not found</div>,
}) => {
  return (
    <Switch>
      {structure.routes.map(({ authorization = 'anonymous', ...route }, index) => {
        const renderCondition = authorization === 'authorized' ? isAuthenticated : !isAuthenticated;

        if (authorization === 'anonymous') {
          return <Route exact key={`${route?.path}_${index}`} {...route} />;
        }

        return <Route exact key={`${route?.path}_${index}`} {...route} />;

        return renderCondition ? (
          <Route exact key={`${route?.path}_${index}`} {...route} />
        ) : (
          <Redirect to={structure.fallbackPaths?.[authorization] || '/403'} />
        );
      })}
      {/*
      // @ts-ignore */}
      {fallbackComponent && <Route children={fallbackComponent} />}
    </Switch>
  );
};
