import { UseQueryOptions } from 'react-query';
/**
 * This function is used when a paginated request is needed (e.g. table). It handles the prefetching of the next page,
 * stops when there's no more data and returns the current results.
 *
 * By default, it works with a `page` variable. If you're using `offset`, please use the `overridePage` argument to set
 * that up. The `step` property defines how much is added to the offset on a page change.
 *
 * If more options need to be passed to the query client, please use the `overrideDefaultQueryOptions` argument.
 * */
export declare const useDataPagination: <SettingsTypes extends {
    page?: number | undefined;
    offset?: number | undefined;
}, ResponseType_1 extends {
    count: number;
}, DataType = string>(dataType: DataType, fetchData: (nextPageSettings?: SettingsTypes | undefined) => Promise<ResponseType_1>, settings: SettingsTypes, pageSize: number, overridePage?: {
    offset: number;
    step: number;
} | undefined, overrideDefaultQueryOptions?: UseQueryOptions<ResponseType_1, unknown, ResponseType_1, import("react-query").QueryKey> | undefined) => {
    isFetchingNextPage: boolean;
    data: undefined;
    error: null;
    isError: false;
    isIdle: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "idle";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<ResponseType_1, unknown>>;
    remove: () => void;
} | {
    isFetchingNextPage: boolean;
    data: undefined;
    error: unknown;
    isError: true;
    isIdle: false;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<ResponseType_1, unknown>>;
    remove: () => void;
} | {
    isFetchingNextPage: boolean;
    data: undefined;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "loading";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<ResponseType_1, unknown>>;
    remove: () => void;
} | {
    isFetchingNextPage: boolean;
    data: ResponseType_1;
    error: unknown;
    isError: true;
    isIdle: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<ResponseType_1, unknown>>;
    remove: () => void;
} | {
    isFetchingNextPage: boolean;
    data: ResponseType_1;
    error: null;
    isError: false;
    isIdle: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("react-query").RefetchOptions & import("react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("react-query").QueryObserverResult<ResponseType_1, unknown>>;
    remove: () => void;
};
