import { ReactNode, useContext, useEffect } from 'react';
import { TopBarUtilitySectionContext } from '../contexts/top-bar-utility-section';

export const _useTopBarUtilitySection = () => useContext(TopBarUtilitySectionContext);
export const useTopBarUtilitySection = (topBarUtilitySectionElement: ReactNode) => {
  const { setTopBarUtilitySection } = useContext(TopBarUtilitySectionContext);

  useEffect(() => {
    setTopBarUtilitySection(topBarUtilitySectionElement);

    return function () {
      setTopBarUtilitySection(null);
    };
  }, [setTopBarUtilitySection, topBarUtilitySectionElement]);
};
