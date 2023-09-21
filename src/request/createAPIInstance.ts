import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';

// import { getTokenSilently, logoutAuth } from '../authentication/context';
import useRequestToken from '../store/useRequestToken';
import { deleteToken, request, RequestProps, setToken, tokenFormat } from './request';
export { default as MockRequest } from './mock';

export type CreateAPIInstanceProps = {
  baseUrl: string;
  baseHeaders?: Record<string, string | undefined>;
  hasAutomaticToken?: boolean;
  responseInterceptors: {
    onFulfilled: (x: AxiosResponse) => AxiosResponse;
    onRejected: (x: AxiosError) => Promise<void | AxiosError>;
  };
  requestInterceptors: {
    onFulfilled: (x: AxiosRequestConfig) => Promise<AxiosRequestConfig>;
    onRejected: (x: AxiosError) => void;
  };
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
  responseInterceptors,
  requestInterceptors,
}: CreateAPIInstanceProps): CreateAPIInstanceType => {
  const orfiumAxios = axios.create({
    baseURL: baseUrl,
  });

  // These are the two interceptors to detect if there is a 401 error to logout the user because 401 is unauthorized
  const respInterceptors = orfiumAxios.interceptors.response.use(
    responseInterceptors.onFulfilled,
    responseInterceptors.onRejected
  );
  // On every request we get the latest token in order to pass it as authorization
  // if this fails then the user will be redirected to the response interceptor
  // Fetching latest token is mandatory for all the request to have up-to-date information
  const reqInterceptors = orfiumAxios.interceptors.request.use(
    requestInterceptors.onFulfilled,
    requestInterceptors.onRejected
  );

  return {
    instance: orfiumAxios,
    createRequest: request(orfiumAxios, baseHeaders),
    setToken: setToken(orfiumAxios),
    deleteToken: deleteToken(orfiumAxios),
  };
};
