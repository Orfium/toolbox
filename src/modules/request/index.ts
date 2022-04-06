import { request, setToken } from './request';
import axios from 'axios';
export { default as MockRequest } from './mock';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const PATCH = 'patch';
const DELETE = 'delete';

export const METHODS = { GET, POST, PUT, DELETE, PATCH };
/*
 * This is a factory for requests. It will create a new instance that will provide all the necessary tools
 * for making requests and add or remove tokens to your requests
 */
const createAPIInstance = ({
  baseUrl = '',
  baseHeaders = {},
}: {
  baseUrl: string;
  baseHeaders?: Record<string, string>;
}) => {
  const orfiumAxios = axios.create({
    baseURL: baseUrl,
  });

  return {
    instance: orfiumAxios,
    createRequest: request(orfiumAxios, baseHeaders),
    setToken: setToken(orfiumAxios),
  };
};

export default createAPIInstance;
