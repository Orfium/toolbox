// import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { orfiumIdBaseInstance } from '../../request';
import { Product } from './types';

export function useOrfiumProducts(orgId: string | undefined) {
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const { request, cancelTokenSource } = orfiumIdBaseInstance.createRequest<Product[]>({
      method: 'get',
      url: '/products/',
    });

    request().then((resp) => {
      setData(resp);
    });

    return cancelTokenSource.cancel;
  }, [orgId]);

  return data;
}
