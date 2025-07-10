import useWindowSize from "@/hooks/useWindowSize.js";

import laptopSvg from "@/assets/laptop.svg";
import tabletSvg from "@/assets/tablet-android.svg";
import phoneSvg from "@/assets/phone-android.svg";
import { useEffect, useState } from "react";

function WindowSize() {
  const { width, height } = useWindowSize();
  const [deviceSvg, setDeviceSvg] = useState();

  useEffect(() => {
    if (width >= 1024) setDeviceSvg(laptopSvg);
    else if (width > 425) setDeviceSvg(tabletSvg);
    else return setDeviceSvg(phoneSvg);
  }, [width, height]);

  return (
    <>
      <div>
        {width}px - {height}px
      </div>
      <div>
        <img src={deviceSvg} />
      </div>
    </>
  );
}

export default WindowSize;
