import { createAPIInstance } from './createAPIInstance';

export * from 'axios';
export * from './createAPIInstance';

export const orfiumBaseInstance = createAPIInstance({
  baseUrl: process.env.REACT_APP_ORFIUM_BASE_URL as string,
  baseHeaders: {},
});

export { METHODS, RequestProps } from './request';
export { default as MockRequest } from './mock';
