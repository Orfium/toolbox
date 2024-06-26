import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

export function NavLinkWithStatePassthrough(props: NavLinkProps) {
  const { to, ...rest } = props;
  const location = useLocation();

  return (
    // @ts-ignore @TODO migrate to abstract routing methodology
    <NavLink
      {...rest}
      to={{ ...(typeof to === 'string' ? { pathname: to } : to), state: location.state }}
    />
  );
}
