import { ReactNode, useState } from 'react';
import { ContentLoadingIndicatorContext } from '../contexts/content-loading-indicator.js';

export function ContentLoadingIndicator(props: { children: ReactNode }) {
  const { children } = props;
  const [loadingIndicator, setLoadingIndicator] = useState<boolean>(false);

  return (
    <ContentLoadingIndicatorContext.Provider
      value={{
        loadingIndicator,
        setLoadingIndicator,
      }}
    >
      {children}
    </ContentLoadingIndicatorContext.Provider>
  );
}
