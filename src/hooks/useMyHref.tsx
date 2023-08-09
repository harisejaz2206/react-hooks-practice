import { useHref } from 'react-router-dom';

export const useMyHref = (to: string) => {
  // Generate href attribute using the `useHref` hook
  const href = useHref(to);
  return href;
};
