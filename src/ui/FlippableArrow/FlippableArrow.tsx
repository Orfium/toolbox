import { Icon } from '@orfium/ictinus';
import { IconWrapper } from './FlippableArrow.styles';

type FlippableChevronProps = {
  expanded: boolean;
  color: string;
  size: number;
};

function FlippableArrow(props: FlippableChevronProps) {
  const { expanded, color, size } = props;

  return (
    <IconWrapper expanded={expanded}>
      <Icon name={'triangleDown'} color={color} size={size} />
    </IconWrapper>
  );
}

export default FlippableArrow;
