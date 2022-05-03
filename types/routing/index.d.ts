import type { ComponentType, FunctionComponent } from 'react';
import React from 'react';
import { RouteComponentProps as ReactRouterRouteComponentProps } from 'react-router';
export * from 'react-router-dom';
/**
 * anonymous: general users that can view only public pages
 * unauthorized: only users that are logged in but not authorized to view those routes
 * authorized: only users that are logged in and also authorized for these routes
 */
export declare type Authorization = 'anonymous' | 'authorized' | 'unauthorized';
export declare type RoutingStructure = {
    fallbackPaths?: Partial<Record<Authorization, string>>;
    routes: RouteItem[];
};
export declare type RouteComponentProps<T = any> = ReactRouterRouteComponentProps<any> & {
    extraProps: T;
};
declare type RouteItem = {
    path: string | string[];
    authorization?: Authorization;
    extraProps?: any;
    component?: React.FunctionComponent<RouteComponentProps>;
};
declare type Props = {
    isAuthenticated: boolean;
    fallbackComponent?: ComponentType;
    structure: RoutingStructure;
};
export declare enum Pages {
    SignIn = 0,
    SignUp = 1,
    CheckEmail = 2,
    ForgotPasswordSubmitPassword = 3,
    ForgotPasswordSubmitEmail = 4,
    Loading = 5
}
export declare const generateRoutes: FunctionComponent<Props>;
