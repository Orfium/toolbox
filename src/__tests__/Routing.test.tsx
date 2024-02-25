import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import { generateRoutes, RoutingStructure } from '~/routing/Routing';

import '@testing-library/jest-dom';

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

xtest('authorized url access while authenticated', async () => {
  const history = createMemoryHistory({ initialEntries: ['/authorized'] });

  render(
    <Router history={history}>
      {generateRoutes({
        isAuthenticated: true,
        structure,
        fallbackComponent: () => <div>page not found</div>,
      })}
    </Router>
  );

  expect(history.location.pathname).toBe('/authorized');
  expect(screen.getByText(/authorized/i)).toBeTruthy();
});

xtest('unauthorized access with redirection to unauthorized fallback while authenticated', async () => {
  const history = createMemoryHistory({ initialEntries: ['/unauthorized'] });

  render(
    <Router history={history}>
      {generateRoutes({
        isAuthenticated: true,
        structure,
        fallbackComponent: () => <div>page not found</div>,
      })}
    </Router>
  );

  expect(history.location.pathname).toBe(structure.fallbackPaths?.unauthorized);
});

xtest('anonymous access while authenticated. Redirection to authenticated but anonymous fallback', async () => {
  const history = createMemoryHistory({ initialEntries: ['/open-page'] });

  render(
    <Router history={history}>
      {generateRoutes({
        isAuthenticated: true,
        structure,
        fallbackComponent: () => <div>page not found</div>,
      })}
    </Router>
  );

  expect(history.location.pathname).toBe(structure.fallbackPaths?.authenticatedButAnonymous);
});

xtest('access to unknown path. Redirection to not found', async () => {
  const history = createMemoryHistory({ initialEntries: ['/unknown-path'] });

  render(
    <Router history={history}>
      {generateRoutes({
        isAuthenticated: true,
        structure,
        fallbackComponent: () => <div>page not found</div>,
      })}
    </Router>
  );

  expect(screen.getByText(/page not found/i)).toBeTruthy();
});

xtest('unauthenticated access with redirection to unauthenticated fallback while NOT authenticated', async () => {
  const history = createMemoryHistory({ initialEntries: ['/unauthorized'] });

  render(
    <Router history={history}>
      {generateRoutes({
        isAuthenticated: false,
        structure,
        fallbackComponent: () => <div>page not found</div>,
      })}
    </Router>
  );

  expect(history.location.pathname).toBe(structure.fallbackPaths?.unauthenticated);
});
