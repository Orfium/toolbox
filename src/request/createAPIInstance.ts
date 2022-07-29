import axios, { AxiosInstance, CancelTokenSource } from 'axios';

import { getTokenSilently, logoutAuth } from '../authentication/context';
import useOrganization from '../store/useOrganization';
import useRequestToken from '../store/useRequestToken';
import { deleteToken, request, RequestProps, setToken, tokenFormat } from './request';
export { default as MockRequest } from './mock';

export type CreateAPIInstanceProps = {
  baseUrl: string;
  baseHeaders?: Record<string, string | undefined>;
};

export type CreateAPIInstanceType = {
  instance: AxiosInstance;
  // @ts-ignore
  createRequest: <T = any>(
    props: RequestProps
  ) => {
    request: () => Promise<T>;
    cancelTokenSource: CancelTokenSource;
  };
  setToken: (token: string) => void;
  deleteToken: () => void;
};

/*
 * This is a factory for requests. It will create a new instance that will provide all the necessary tools
 * for making requests and add or remove tokens to your requests
 */
export const createAPIInstance = ({
  baseUrl = '',
  baseHeaders = {
    Authorization: tokenFormat(useRequestToken.getState().token || ''),
  },
}: CreateAPIInstanceProps): CreateAPIInstanceType => {
  const orfiumAxios = axios.create({
    baseURL: baseUrl,
  });

  // note Allow Offline Access on API of auth0 must be set for refresh tokens
  orfiumAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        logoutAuth();
      }

      return error;
    }
  );
  orfiumAxios.interceptors.request.use(
    async (config) => {
      const { token } = await getTokenSilently();
      config.headers.Authorization = `Bearer ${token}`;

      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return {
    instance: orfiumAxios,
    createRequest: request(orfiumAxios, baseHeaders),
    setToken: setToken(orfiumAxios),
    deleteToken: deleteToken(orfiumAxios),
  };
};
