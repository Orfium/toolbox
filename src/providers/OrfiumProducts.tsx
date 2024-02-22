import { ReactNode, useEffect, useState } from 'react';
import { OrfiumProductsContext, Product } from '~/contexts/orfium-products';
import { useOrganizations } from '~/hooks/useOrganizations';
import { orfiumIdBaseInstance } from '~/request/orfium-id-base-instance';

export function OrfiumProducts(props: { children: ReactNode }) {
  const { children } = props;

  const { selectedOrganization } = useOrganizations();
  const [orfiumProducts, setOrfiumProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (selectedOrganization?.org_id) {
      const { request, cancelTokenSource } = orfiumIdBaseInstance.createRequest<Product[]>({
        method: 'get',
        url: '/products/',
      });

      request().then((resp: Product[]) => {
        setOrfiumProducts(resp);
      });

      return cancelTokenSource.cancel;
    } else {
      return () => {};
    }
  }, [selectedOrganization?.org_id]);

  return (
    <OrfiumProductsContext.Provider value={orfiumProducts}>
      {children}
    </OrfiumProductsContext.Provider>
  );
}
