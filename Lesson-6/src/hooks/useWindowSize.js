import { useEffect, useState } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function refreshSizes() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", refreshSizes);

    return () => {
      window.removeEventListener("resize", refreshSizes);
    };
  }, []);

  return {
    width,
    height,
  };
}

export default useWindowSize;
