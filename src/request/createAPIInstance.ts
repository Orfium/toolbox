import axios, { AxiosInstance, CancelTokenSource } from 'axios';
import useRequestToken from '../store/requestToken';
import { getTokenSilently, logoutAuth } from '../utils/auth';
import { deleteToken, request, RequestProps, setToken, tokenFormat } from './request';
export { default as MockRequest } from './mock';

export type CreateAPIInstanceProps = {
  baseUrl: string;
  baseHeaders?: Record<string, string | undefined>;
  hasAutomaticToken?: boolean;
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
  hasAutomaticToken = true,
}: CreateAPIInstanceProps): CreateAPIInstanceType => {
  const orfiumAxios = axios.create({
    baseURL: baseUrl,
  });

  // These are the two interceptors to detect if there is a 401 error to logout the user because 401 is unauthorized
  orfiumAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        if (hasAutomaticToken) {
          logoutAuth();
        }
      }

      return error;
    }
  );
  // On every request we get the latest token in order to pass it as authorization
  // if this fails then the user will be redirected to the response interceptor
  // Fetching latest token is mandatory for all the request to have up-to-date information
  orfiumAxios.interceptors.request.use(
    async (config) => {
      if (hasAutomaticToken) {
        const { token } = await getTokenSilently();
        config.headers.Authorization = `Bearer ${token}`;
      }

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
