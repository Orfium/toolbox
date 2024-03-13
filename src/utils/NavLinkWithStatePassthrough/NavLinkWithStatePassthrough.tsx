import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';

export function NavLinkWithStatePassthrough(props: NavLinkProps) {
  const { to, ...rest } = props;
  const location = useLocation();

  return (
    <NavLink
      {...rest}
      to={{ ...(typeof to === 'string' ? { pathname: to } : to), state: location.state }}
    />
  );
}
