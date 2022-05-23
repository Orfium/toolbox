import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';

import { axiosPromiseResult } from './utils';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const PATCH = 'patch';
const DELETE = 'delete';

export const METHODS = { GET, POST, PUT, DELETE, PATCH };

export type RequestProps = {
  method: string;
  url: string;
  params?: Record<string, unknown>;
  withoutBase?: boolean;
  headers?: Record<string, unknown>;
} & Pick<AxiosRequestConfig, 'onUploadProgress' | 'onDownloadProgress' | 'responseType'>;

export const request =
  (orfiumAxios: AxiosInstance, baseHeaders: Record<string, string>) =>
  // @ts-ignore
  <T = any>({
    method,
    url,
    params = {},
    withoutBase = false,
    headers = {},
    onUploadProgress,
    onDownloadProgress,
    responseType,
  }: RequestProps) => {
    const cancelTokenSource = axios.CancelToken.source();
    const config = {
      method: method as Method,
      url,
      cancelToken: cancelTokenSource.token,
      data: params,
      params: method === METHODS.GET ? params : undefined,
      headers: { ...baseHeaders, ...headers }, //adding base headers based on initialization
      ...(onUploadProgress && { onUploadProgress }),
      ...(onDownloadProgress && { onDownloadProgress }),
      responseType,
    };

    const request = () =>
      withoutBase
        ? axiosPromiseResult<T>(axios(config))
        : axiosPromiseResult<T>(orfiumAxios(config));

    return { request, cancelTokenSource };
  };

export const setToken =
  (orfiumAxios: AxiosInstance) =>
  (token: string): void => {
    const hasToken = token !== '';
    orfiumAxios.defaults.headers.common.Authorization = hasToken ? `Token ${token}` : '';
  };

export const deleteToken = (orfiumAxios: AxiosInstance) => (): void => {
  delete orfiumAxios.defaults.headers.common.Authorization;
};
