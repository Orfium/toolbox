import axios, { AxiosInstance, Method } from 'axios';
import { axiosPromiseResult } from './utils';
import { METHODS } from './index';

export const request =
  (orfiumAxios: AxiosInstance, baseHeaders: Record<string, string>) =>
  <T>(
    method: string,
    url: string,
    { params }: any,
    withoutBase = false,
    headers = {},
    onUploadProgress?: (progressEvent: any) => void
  ) => {
    const cancelTokenSource = axios.CancelToken.source();
    const config = {
      method: method as Method,
      url,
      cancelToken: cancelTokenSource.token,
      data: params,
      params: method === METHODS.GET ? params : undefined,
      headers: { ...baseHeaders, ...headers }, //adding base headers based on initialization
      ...(onUploadProgress && { onUploadProgress }),
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
