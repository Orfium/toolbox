import { Link, useLocation, type LinkProps } from 'react-router-dom';

export function LinkWithStatePassthrough(props: LinkProps) {
  const { to, ...rest } = props;
  const location = useLocation();

  return (
    // @ts-ignore @TODO migrate to abstract routing methodology
    <Link
      {...rest}
      to={{ ...(typeof to === 'string' ? { pathname: to } : to), state: location.state }}
    />
  );
}
