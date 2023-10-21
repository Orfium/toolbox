import { Link, LinkProps, useLocation } from 'react-router-dom';

export function LinkWithStatePassthrough(props: LinkProps) {
  const { to, ...rest } = props;
  const location = useLocation();

  return (
    <Link
      {...rest}
      to={{ ...(typeof to === 'string' ? { pathname: to } : to), state: location.state }}
    />
  );
}
