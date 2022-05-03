export { default as MockRequest } from './mock';
export declare const METHODS: {
    GET: string;
    POST: string;
    PUT: string;
    DELETE: string;
    PATCH: string;
};
declare const createAPIInstance: ({ baseUrl, baseHeaders, }: {
    baseUrl: string;
    baseHeaders?: Record<string, string> | undefined;
}) => {
    instance: import("axios").AxiosInstance;
    createRequest: <T>(method: string, url: string, { params }: any, withoutBase?: boolean, headers?: {}, onUploadProgress?: ((progressEvent: any) => void) | undefined) => {
        request: () => Promise<T>;
        cancelTokenSource: import("axios").CancelTokenSource;
    };
    setToken: (token: string) => void;
};
export default createAPIInstance;
