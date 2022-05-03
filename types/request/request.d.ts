import { AxiosInstance } from 'axios';
export declare const request: (orfiumAxios: AxiosInstance, baseHeaders: Record<string, string>) => <T>(method: string, url: string, { params }: any, withoutBase?: boolean, headers?: {}, onUploadProgress?: ((progressEvent: any) => void) | undefined) => {
    request: () => Promise<T>;
    cancelTokenSource: import("axios").CancelTokenSource;
};
export declare const setToken: (orfiumAxios: AxiosInstance) => (token: string) => void;
