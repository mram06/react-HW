import hotels from "@/providers/task2/hotels";
import { HotelsContext } from "@/context/task2/HotelsContext";

function HotelsProvider({ children }) {
  return <HotelsContext value={hotels}>{children}</HotelsContext>;
}

export default HotelsProvider;
