import axios, { AxiosInstance, CancelTokenSource } from 'axios';

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

  return {
    instance: orfiumAxios,
    createRequest: request(orfiumAxios, baseHeaders),
    setToken: setToken(orfiumAxios),
    deleteToken: deleteToken(orfiumAxios),
  };
};
