import { AcceptedIconNames } from '@orfium/ictinus/dist/components/Icon/types';

export type MenuItem = {
  text: string;
  url: string;
  iconName: AcceptedIconNames;
  children?: (Omit<MenuItem, 'iconName'> & { iconName?: AcceptedIconNames })[];
};
