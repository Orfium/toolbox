import { Redirect, RedirectProps, useLocation } from 'react-router-dom';

export function RedirectWithStatePassthrough(props: RedirectProps) {
  const { to, ...rest } = props;
  const location = useLocation();

  return (
    <Redirect
      {...rest}
      to={{ ...(typeof to === 'string' ? { pathname: to } : to), state: location.state }}
    />
  );
}
