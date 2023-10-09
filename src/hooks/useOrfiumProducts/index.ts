import { useQuery } from 'react-query';
import { orfiumIdBaseInstance } from '../../request';
import { Product } from './types';

export function useOrfiumProducts(orgId: string | undefined) {
  return useQuery(
    ['products', orgId],
    () => {
      return orfiumIdBaseInstance
        .createRequest<Product[]>({
          method: 'get',
          url: '/products/',
        })
        .request();
    },
    {
      enabled: !!orgId,
    }
  );
}
