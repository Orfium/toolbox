import { createContext } from 'react';

export type Product = {
  client_id: string;
  client_metadata: {
    product_code: string;
  };
  grant_types: string | null;
  icon_url: string;
  login_url: string;
  logo_url: string;
  name: string;
  organization_usage: string;
};

export type OrfiumProductsContextValue = Product[] | null;

export const defaultOrfiumProductsContextValues: OrfiumProductsContextValue = null;

export const OrfiumProductsContext = createContext<OrfiumProductsContextValue>(
  defaultOrfiumProductsContextValues
);
