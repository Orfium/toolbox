import { AcceptedIconNames } from '@orfium/ictinus/dist/components/Icon/types.js';
import { Optional } from '../../utils/types.js';

export type MenuItem = {
  text: string;
  url: string;
  iconName: AcceptedIconNames;
  children?: Optional<MenuItem, 'iconName'>[];
};
