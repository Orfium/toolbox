import { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { Optional } from '../../../../../../../utils/types.js';
import { MenuItem as MenuItemType } from '../../../../../types.js';

export function useMenuItemMatch(item: MenuItemType | Optional<MenuItemType, 'iconName'>) {
  const { state } = useLocation<{
    previous: {
      pathname: string;
      search: string;
    };
  } | null>();
  const match = useRouteMatch(item.url);
  const matchedBoolean = !!match;
  const [expanded, setExpanded] = useState<boolean>(() => {
    return matchedBoolean;
  });

  useEffect(() => {
    setExpanded(matchedBoolean);
  }, [matchedBoolean]);

  return { expanded, setExpanded, historyState: state, match };
}
