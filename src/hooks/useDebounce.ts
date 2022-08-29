import { useEffect, useRef, MutableRefObject } from 'react';

const useDebounce = (fn: () => void, ms: number = 30, deps: any[] = []) => {
  const timeout: MutableRefObject<any> | null = useRef();

  const cancel = () => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = null;
  };

  useEffect(() => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      fn();
    }, ms);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [cancel];
};

export default useDebounce;
