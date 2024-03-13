import { BrowserRouter } from 'react-router-dom';

import { generateRoutes, RoutingStructure } from './Routing';

/**
 * ** THIS IS A DEMO PAGE **
 * You can have this as a demo page/project for your reference on how you can implement routing
 * We try to implement all the options of the routing but some information that needed like authorization has to come
 * from the application.
 */
// eslint-disable-next-line
const __TestAppNavigation = ({ auth }: any) => {
  const structure: RoutingStructure = {
    fallbackPaths: {
      unauthorized: '/unauthorized-redirect',
      unauthenticated: '/unauthenticated-redirect',
      authenticatedButAnonymous: '/redirect-from-anonymous-to-authenticated-base',
    },
    routes: [
      { authorization: 'authorized', path: '/authorized', component: () => <div>authorized</div> },
      {
        authorization: 'unauthorized',
        path: '/unauthorized',
        extraProps: { testData: 'testData' },
        component: () => <div>authorized</div>,
      },
      {
        authorization: 'unauthorized',
        path: '/login',
        component: () => <div>unauthorized</div>,
      },
      {
        authorization: 'anonymous',
        path: '/open-page',
        component: () => <div>anonymous</div>,
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
};
