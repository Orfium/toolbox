import { useQueryClient, UseQueryOptions } from 'react-query';
import { useEffect, useState } from 'react';
import { createQueryKey } from '../utils';
import { useData } from './useData';

const pageStep = 1;

/**
 * This function is used when a paginated request is needed (e.g. table). It handles the prefetching of the next page,
 * stops when there's no more data and returns the current results.
 *
 * By default, it works with a `page` variable. If you're using `offset`, please use the `overridePage` argument to set
 * that up. The `step` property defines how much is added to the offset on a page change.
 *
 * If more options need to be passed to the query client, please use the `overrideDefaultQueryOptions` argument.
 * */
export const useDataPagination = <
  SettingsTypes extends { page?: number; offset?: number },
  ResponseType extends { count: number },
  DataType = string
>(
  dataType: DataType,
  fetchData: (nextPageSettings?: SettingsTypes) => Promise<ResponseType>,
  settings: SettingsTypes,
  pageSize: number,
  overridePage?: { offset: number; step: number },
  overrideDefaultQueryOptions?: UseQueryOptions<ResponseType>
) => {
  const queryClient = useQueryClient();
  const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

  const query = useData<SettingsTypes, ResponseType, DataType>(
    dataType,
    (settings?: SettingsTypes) => fetchData(settings),
    settings,
    overrideDefaultQueryOptions
  );

  const pagesCount = Math.ceil((query.data?.count ?? 0) / pageSize);

  useEffect(() => {
    const nextPageSettings = {
      ...settings,
      ...(overridePage
        ? { offset: overridePage.offset + overridePage.step }
        : { page: (settings?.page ?? 0) + pageStep }),
    };

    const preFetchNextPage = () => {
      queryClient
        .prefetchQuery(
          (createQueryKey(dataType, nextPageSettings) as string[]).flat(),
          () => {
            setIsFetchingNextPage(!query.isPreviousData);
            return fetchData(nextPageSettings);
          },
          {
            staleTime: 30 * 1000,
          }
        )
        .finally(() => setIsFetchingNextPage(false));
    };

    const hasMore = overridePage
      ? (query.data?.count ?? 0) > overridePage.offset + overridePage.step
      : pagesCount > (settings?.page ?? 0);

    if (hasMore) {
      preFetchNextPage();
    }
  }, [
    settings,
    pagesCount,
    queryClient,
    overridePage,
    dataType,
    query.isPreviousData,
    fetchData,
    query.data?.count,
  ]);

  return {
    ...query,
    isFetchingNextPage,
  };
};
