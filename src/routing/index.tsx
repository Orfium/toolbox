// @deprecated This module is about to be deprecated in the next version as it will be handled by monorepo utils
// That is why we keep react-router-dom as dependency in package.json

export { BrowserRouter, Redirect, Route } from 'react-router-dom';
export {
  Authorization,
  FallbackPath,
  generateRoutes,
  RouteComponentProps,
  RouteItem,
  RoutingStructure,
} from './Routing.js';
