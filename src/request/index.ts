import { createAPIInstance } from './createAPIInstance';

export * from 'axios';
export * from './createAPIInstance';

export const orfiumIdBaseInstance = createAPIInstance({
  baseUrl: process.env.REACT_APP_ORFIUM_ID_DOMAIN as string,
  baseHeaders: {},
});

export { METHODS, RequestProps } from './request';
export { default as MockRequest } from './mock';
