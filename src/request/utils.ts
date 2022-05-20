// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosPromise, AxiosError } from 'axios';

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
