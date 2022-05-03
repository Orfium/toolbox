import { AxiosPromise } from 'axios';
/**
 * takes an axios promise and returns the actual data from the request or the error
 *
 * axiosPromise {AxiosPromise} the axios promise
 * @returns {AxiosResponse | AxiosError} The API response
 */
export declare const axiosPromiseResult: <T>(axiosPromise: AxiosPromise<T>) => Promise<T>;
