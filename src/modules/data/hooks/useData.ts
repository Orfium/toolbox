import { useQuery, UseQueryOptions } from 'react-query';
import { createQueryKey } from '../utils';

export const DEFAULT_QUERY_CONFIG = {
  retry: false,
  keepPreviousData: true,
  refetchOnWindowFocus: true,
  staleTime: 30 * 1000,
};

export const useData = <
  SettingsTypes extends { page?: number; offset?: number },
  ResponseType,
  DataType = string
>(
  dataType: DataType,
  fetchData: (settings?: SettingsTypes) => Promise<ResponseType>,
  settings?: SettingsTypes,
  overrideDefaultQueryOptions?: UseQueryOptions<ResponseType>
) => {
  return useQuery<ResponseType>(
    (createQueryKey(dataType, settings) as string[]).flat(),
    () => {
      return fetchData(settings);
    },
    { ...DEFAULT_QUERY_CONFIG, ...(overrideDefaultQueryOptions ? overrideDefaultQueryOptions : {}) }
  );
};
