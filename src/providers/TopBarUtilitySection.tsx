import { ReactNode, useState } from 'react';
import { TopBarUtilitySectionContext } from '../contexts/top-bar-utility-section';

export function TopBarUtilitySection(props: { children: ReactNode }) {
  const { children } = props;
  const [topBarUtilitySection, setTopBarUtilitySection] = useState<ReactNode>(null);

  return (
    <TopBarUtilitySectionContext.Provider value={{ topBarUtilitySection, setTopBarUtilitySection }}>
      {children}
    </TopBarUtilitySectionContext.Provider>
  );
}
