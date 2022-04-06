// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

// import { __GROUP__, __TOKEN__ } from './constants';
// import { clearCookieItem } from './storage';
// import { setAxiosToken } from 'src/providers/axiosInstances';

/**
 * takes an axios promise and returns the actual data from the request or the error
 *
 * axiosPromise {AxiosPromise} the axios promise
 * @returns {AxiosResponse | AxiosError} The API response
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const axiosPromiseResult = <T>(axiosPromise: AxiosPromise<T>): Promise<T> =>
  axiosPromise
    .then(({ data }) => data)
    .catch((error: AxiosError<T>) => {
      throw error;
    });


// export const logout = () => {
//   clearCookieItem(__TOKEN__);
//   clearCookieItem(__GROUP__);
//   setAxiosToken('');
//   window.location.replace('login');
// };
