import { MutableRefObject, useEffect } from 'react';

export function useClickAwayListener(
  ref: MutableRefObject<HTMLElement | null>,
  onClick: (event: MouseEvent) => void
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      onClick(event);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);

    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  });
}
