import { memo } from "react";

function GridRow({ data }) {
  return <div>{data.name}</div>;
}

export default memo(GridRow);
