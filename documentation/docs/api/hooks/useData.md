---
id: 'useData'
title: 'useData<
  SettingsTypes extends { page?: number; offset?: number },
  ResponseType,
  DataType = string
>'
sidebar_label: 'useData'
sidebar_position: 0
custom_edit_url: null
---

`import { useData } from '@orfium/toolbox';`

### Description

Encapsulates useQuery hook providing specific controls over the react-query library. Based on the passed parameters
constructs a dynamic query key and provides specific api params (settings) for the api handler function.

#### Example

```typescript jsx
import { useData } from '@orfium/toolbox';

// {page: number} is needed for pagination
type CustomData = Record<string, string> & { page: number };
type CustomSettings = Record<string, string> | null;

const DATA: CustomData = {
  CUSTOM: 'CUSTOM',
};

const fetchData = (settings?: CustomSettings) => settings && fetch('/custom-data', settings);

const CustomComponent: FC = () => {
  const [filterSettings, setFilterSettings] = useState<CustomSettings>(null);

  // data includes all the useQuery props.
  const data = useData<CustomSettings, CustomData>(DATA.CUSTOM, fetchData, filterSettings);

  //do something we your react-query data...
};
```

### Parameters

- `dataType: DataType` - Generic typed parameter that is needed for dynamic query key construction
- `fetchData: (settings?: SettingsTypes) => Promise<ResponseType>` - the api handler that returns a promise with the fetched data. It contains an optional parameter `settings`.
- `settings?: SettingsTypes` - the parameters needs to make a query key unique.
- `overrideDefaultQueryOptions?: UseQueryOptions<ResponseType>` - the options needed to override existing react query option.

### Return value

Ƭ `ReturnType<typeof useQuery>`
