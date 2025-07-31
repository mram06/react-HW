import { useEffect, useRef, useState } from "react";

function useDebounce(value, delay = 200) {
  const [delayedValue, setDelayedValue] = useState(value);
  const timeoutVal = useRef(null);

  useEffect(() => {
    timeoutVal.current = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutVal.current);
    };
  }, [value]);

  return { delayedValue };
}

export default useDebounce;
