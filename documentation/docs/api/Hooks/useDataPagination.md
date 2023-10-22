---
id: 'useDataPagination'
title: 'useDataPagination<
  SettingsTypes extends { page?: number; offset?: number },
  ResponseType extends { count: number },
  DataType = string
>'
sidebar_label: 'useDataPagination'
sidebar_position: 10
custom_edit_url: null
---

`import { useDataPagination } from '@orfium/toolbox';`

## Description

Enables pagination with next page prefetching and caching previous fetched pages.

**Example Usage**

```typescript jsx
import { useData, useDataPagination } from '@orfium/toolbox';

// {page: number} is needed for pagination
type CustomData = Record<string, string> & { page: number };
type CustomSettings = Record<string, string> | null;

const DATA: CustomData = {
  CUSTOM: 'CUSTOM',
};

const fetchData = (settings?: CustomSettings) => settings && fetch('/custom-data', settings);

const PAGE_SIZE = 10;

const CustomComponent: FC = () => {
  const [filterSettings, setFilterSettings] = useState<CustomSettings>(null);

  // Generic types are optional. Typescript will auto assigned types based on parameters' types.
  // data includes all the useQuery props.
  const data = useData<CustomSettings, CustomData>(DATA.CUSTOM, fetchData, filterSettings);

  // enable pagination
  const pagesCount = Math.ciel(data.records.count / PAGE_SIZE); //
  const { isFetchingNextPage } = useDataPagination(
    DATA.CUSTOM,
    fetchData,
    filterSettings,
    data.isPreviousData,
    pagesCount
  );

  return <div>{isFetchingNextPage ? 'fetching next page' : data.records.count}</div>;
};
```

## Parameters

- `dataType: DataType` - Generic typed parameter that is needed for dynamic query key construction
- `fetchData: (settings?: SettingsTypes) => Promise<ResponseType>` - the api handler that returns a promise with the fetched data. It contains an optional parameter `settings`.
- `settings?: SettingsTypes` - the parameters needs to make a query key unique.
- `pageSize: number` 
- `overridePage?: { offset: number; step: number }`
- `overrideDefaultQueryOptions?: UseQueryOptions<ResponseType>`

## Return value

Ƭ `ReturnType<typeof useQuery> & { isFetchingNextPage: boolean; }`
