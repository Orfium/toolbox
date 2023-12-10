import { ReactNode, useState } from 'react';
import { ContentLoadingIndicatorContext } from '../contexts/content-loading-indicator';

export function ContentLoadingIndicator(props: { children: ReactNode }) {
  const { children } = props;
  const [loadingIndicatorActive, setLoadingIndicatorActive] = useState<boolean>(false);

  return (
    <ContentLoadingIndicatorContext.Provider
      value={{
        loadingIndicatorActive,
        setLoadingIndicatorActive,
      }}
    >
      {children}
    </ContentLoadingIndicatorContext.Provider>
  );
}
