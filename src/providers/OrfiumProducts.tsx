import { ReactNode, useEffect, useState } from 'react';
import { OrfiumProductsContext, Product } from '../contexts/orfium-products';
import { useOrganizations } from '../hooks';
import { orfiumIdBaseInstance } from '../request';

export function OrfiumProducts(props: { children: ReactNode }) {
  const { children } = props;

  const { selectedOrganization } = useOrganizations();
  const [orfiumProducts, setOrfiumProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const { request, cancelTokenSource } = orfiumIdBaseInstance.createRequest<Product[]>({
      method: 'get',
      url: '/products/',
    });

    request().then((resp) => {
      setOrfiumProducts(resp);
    });

    return cancelTokenSource.cancel;
  }, [selectedOrganization?.org_id]);

  return (
    <OrfiumProductsContext.Provider value={orfiumProducts}>
      {children}
    </OrfiumProductsContext.Provider>
  );
}
