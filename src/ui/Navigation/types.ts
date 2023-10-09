import { AcceptedIconNames } from '@orfium/ictinus/dist/components/Icon/types';
import { Optional } from '../../utils';

export type MenuItem = {
  text: string;
  url: string;
  iconName: AcceptedIconNames;
  children?: Optional<MenuItem, 'iconName'>[];
};
