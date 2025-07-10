import { memo } from "react";

function ResultDisplay({ value }) {
  console.log("---- Display rendered ----");

  return <div>{value}</div>;
}

export default memo(ResultDisplay);
