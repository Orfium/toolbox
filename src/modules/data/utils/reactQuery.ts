import { QueryKey } from 'react-query';

/**
 * Create a dynamic query key for react query handlers
 * @param dataType
 * @param keyOptions
 * @return page
 */
export const createQueryKey = <Type = string, Options = null>(
  dataType: Type,
  keyOptions: Options
): QueryKey => [dataType, keyOptions];
