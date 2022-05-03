import { UseQueryOptions } from 'react-query';
export declare const DEFAULT_QUERY_CONFIG: {
    retry: boolean;
    keepPreviousData: boolean;
    refetchOnWindowFocus: boolean;
    staleTime: number;
};
export declare const useData: <SettingsTypes extends {
    page?: number | undefined;
    offset?: number | undefined;
}, ResponseType_1, DataType = string>(dataType: DataType, fetchData: (settings?: SettingsTypes | undefined) => Promise<ResponseType_1>, settings?: SettingsTypes | undefined, overrideDefaultQueryOptions?: UseQueryOptions<ResponseType_1, unknown, ResponseType_1, import("react-query").QueryKey> | undefined) => import("react-query").UseQueryResult<ResponseType_1, unknown>;
