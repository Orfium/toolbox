import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { createAPIInstance, CreateAPIInstanceType } from '../request';

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <APIProvider>.');
};

export const defaultContextValues: CreateAPIInstanceType = {
  instance: axios.create(),
  createRequest: stub,
  deleteToken: stub,
  setToken: stub,
};

export const APIContext = createContext<CreateAPIInstanceType>(defaultContextValues);

function APIProvider({
  children,
  hasAutomaticToken,
}: {
  children: React.ReactNode;
  hasAutomaticToken?: boolean;
}) {
  const { logout, getAccessTokenSilently } = useAuth0();
  const [api, setAPI] = useState<CreateAPIInstanceType | null>(null);

  useEffect(() => {
    setAPI(
      createAPIInstance({
        baseUrl: process.env.REACT_APP_ORFIUM_ID_DOMAIN as string,
        baseHeaders: {},
        responseInterceptors: {
          onFulfilled: (response) => response,
          onRejected: async (error) => {
            if (error?.response?.status === 401) {
              if (hasAutomaticToken) {
                return logout();
              }
            }

            return error;
          },
        },
        requestInterceptors: {
          onFulfilled: async (config) => {
            if (hasAutomaticToken) {
              const token = await getAccessTokenSilently();
              config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
          },
          onRejected: (error) => {
            Promise.reject(error);
          },
        },
      })
    );
  }, [getAccessTokenSilently, hasAutomaticToken, logout]);

  if (api === null) {
    return null;
  }

  console.log(api);

  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
}

const useAPI = () => React.useContext(APIContext);

export { APIProvider, useAPI };
