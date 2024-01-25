import { createAPIInstance } from './createAPIInstance.js';

export const orfiumIdBaseInstance = createAPIInstance({
  baseUrl: process.env.REACT_APP_ORFIUM_ID_DOMAIN as string,
  baseHeaders: {},
});
