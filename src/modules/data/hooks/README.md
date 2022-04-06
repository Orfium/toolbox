## Hook data handlers usage examples

### useData

_Description: Encapsulates useQuery hook providing specific controls over the react-query library. Based on the passed parameters constructs a dynamic query key and provides specific api params (settings) for the api handler function._<br /> 

Parameters: 
- dataType: Generic typed parameter that is needed for dynamic query key construction
- fetchData: the api handler that returns a promise with the fetched data. It contains an optional parameter `settings`.
- settings: the parameters needs to make a query key unique.
- overrideDefaultQueryOptions: the options needed to override existing react query option.

#### Example

```typescript jsx
import { useData } from "src/hooks/data/useData";

// {page: number} is needed for pagination
type CustomData = Record<string, string> & {page: number}; 
type CustomSettings = Record<string, string> | null;

const DATA: CustomData = {
  CUSTOM: "CUSTOM"
}

const fetchData = (settings?: CustomSettings) => settings && fetch('/custom-data', settings);

const CustomComponent: FC = () => {
  const [filterSettings, setFilterSettings] = useState<CustomSettings>(null);
  
  // data includes all the useQuery props.
  const data = useData<CustomSettings, CustomData>(DATA.CUSTOM, fetchData, filterSettings);
  
  //do something we your react-query data...
}
```


### useDataPagination

_Description: Enables pagination with  next page prefetching and caching previous fetched pages._<br />

Parameters:
- dataType: Generic typed parameter that is needed for dynamic query key construction
- fetchData: the api handler that returns a promise with the fetched data. It contains an optional parameter `settings`.
- settings: the parameters needs to make a query key unique.
- isPreviousData: this is a react-query variable that you can get by destructuring useData returned object, 
- pagesCount: the available pages count based on the total data count, and the max number per page (data.records.count/page_size)

#### Example

```typescript jsx
import { useData } from "src/hooks/data/useData";
import { useDataPagination } from "src/hooks/data/useDataPagination";

// {page: number} is needed for pagination
type CustomData = Record<string, string> & { page: number };
type CustomSettings = Record<string, string> | null;

const DATA: CustomData = {
  CUSTOM: "CUSTOM"
}

const fetchData = (settings?: CustomSettings) => settings && fetch('/custom-data', settings);

const PAGE_SIZE = 10;

const CustomComponent: FC = () => {
  const [filterSettings, setFilterSettings] = useState<CustomSettings>(null);

  // Generic types are optional. Typescript will auto assigned types based on parameters' types.
  // data includes all the useQuery props.
  const data = useData<CustomSettings, CustomData>(DATA.CUSTOM, fetchData, filterSettings);

  // enable pagination
  const pagesCount = Math.ciel(data.records.count/PAGE_SIZE); // 
  const { isFetchingNextPage } = useDataPagination(DATA.CUSTOM, fetchData, filterSettings, data.isPreviousData, pagesCount)

  return <div>{isFetchingNextPage ? 'fetching next page': data.records.count}</div>
}
```